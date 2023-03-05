from .models import *
from datetime import datetime, date

def calculateAge(birthDate):
    today = date.today()
    age = today.year - birthDate.year -((today.month, today.day) < (birthDate.month, birthDate.day))
 
    return age

def recommendation(user_id):
    tups = Recommendation.objects.filter(id__exact = user_id)
    tup = tups[0]
    sc = float(tup.score)
    filter_sc = None
    try:    
        tmp = Person.objects.get(id__exact = user_id, is_subscribed__exact = "")
    except Person.DoesNotExist:
        tmp = None
    if not tmp:
        filter_sc = Recommendation.objects.filter(score__range = (sc - 5, sc + 5))
    else:
        filter_sc = Recommendation.objects.filter(score__range = (sc, sc + 10))

    wtd = tup.who_to_date

    filter_wtd = filter_sc.filter(who_to_date__exact=wtd)
    # filter_wtd = Recommendation.objects.filter(who_to_date__exact=wtd)
    ihd = tup.is_habit_drink

    if ihd == '0':
        filter_ihd = filter_wtd.filter(is_habit_drink__exact = '0')
    elif ihd == '1':
        filter_ihd = filter_wtd.filter(is_habit_drink__in = ['0', '1'])
    else:
        filter_ihd = filter_wtd

    ihs = tup.is_habit_smoke

    if ihs == '0':
        filter_ihs = filter_ihd.filter(is_habit_smoke__exact = '0')
    elif ihs == '1':
        filter_ihs = filter_ihd.filter(is_habit_smoke__in = ['0', '1'])
    else:
        filter_ihs = filter_ihd
    wtf = tup.what_to_find

    filter_wtf = filter_ihs.filter(who_to_date__exact=wtf)

    ht = float(tup.height)

    filter_ht = filter_wtf.filter(height__range = (ht - 10, ht + 10))

    id_l = []
    # print(filter)
    for i in range(len(filter_ht)):
        id_l.append(filter_ht[i].id)

    per = Person.objects.get(id__exact = user_id)
    interest = per.interests
    print(interest)

    filter_inte = Person.objects.filter(id__in = id_l)
    # print(id_l)
    print(filter_inte)

    try:
        filter_inter = filter_inte.filter(
            set(interest).intersection(set(filter_inte.values_list('interests', flat=True)))
        )
    except ValueError:
        filter_inter = filter_inte

    created_At = per.createdAt
    create_tmp = calculateAge(datetime.strptime(created_At.split("T")[0], "%Y-%m-%d"))

    l = []

    for i in range(len(filter_inter)):
        l.append((filter_inter[i].id, calculateAge(datetime.strptime(filter_inter[i].createdAt.split("T")[0], "%Y-%m-%d"))))

    for i in l:
        if i[1] <create_tmp:
            l.remove(i) 

    l_tmp = [i for (i, j) in l]

    filter_final = filter_inter.filter(id__in = l_tmp)  
    
    try:
        final_users = filter_final[:10]
    except:
        final_users = filter_final

    # swi = Swipes.objects.filter(id__exact=user_id, is_unmatch__exact=False)
    # nom = len(swi)
    print(list(final_users))

    return list(final_users)

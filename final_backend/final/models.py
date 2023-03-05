from django.db import models
class Person(models.Model):
    id = models.BigIntegerField(primary_key=True)
    bio = models.CharField(max_length=200)
    college = models.TextField()
    country = models.TextField()
    createdAt = models.TextField()
    dob = models.TextField()
    email = models.TextField()
    face_detection_probabilities = models.TextField()
    gender = models.TextField()
    height = models.TextField()
    insta_username = models.TextField()
    interests = models.TextField()
    is_habit_drink = models.TextField()
    is_habit_smoke = models.TextField()
    is_verified = models.TextField()
    mobile = models.BigIntegerField()
    name = models.TextField()
    status = models.TextField()
    type = models.TextField()
    updatedAt = models.TextField()
    verified_at = models.TextField()
    what_to_find = models.TextField()
    who_to_date = models.TextField()
    is_subscribed = models.TextField()

class Swipes(models.Model):
    id = models.BigIntegerField(primary_key=True)
    first_like_unlike_at = models.TextField()
    first_msg = models.TextField(max_length=200)
    first_type = models.TextField()
    is_unmatch = models.TextField()
    like_count = models.BigIntegerField()
    p1 = models.ForeignKey(Person, on_delete=models.CASCADE, related_name="swipes1")
    p1_extend_at = models.TextField()
    p2 = models.ForeignKey(Person, on_delete=models.CASCADE, related_name="swipes2")
    p2_extend_at = models.TextField()
    second_like_unlike_at = models.TextField()
    second_msg = models.TextField()
    second_type = models.TextField()
    unmatch_on = models.TextField()

class Recommendation(models.Model):
    id = models.BigIntegerField(primary_key=True)
    height = models.FloatField()
    is_habit_drink = models.BigIntegerField()
    is_habit_smoke = models.BigIntegerField()
    is_verified = models.BigIntegerField()
    what_to_find = models.BigIntegerField()
    who_to_date = models.BigIntegerField()
    score = models.FloatField()
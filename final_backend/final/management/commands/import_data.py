import csv
from django.core.management.base import BaseCommand
from final.models import Person

class Command(BaseCommand):
    help = 'Import data from CSV file'

    def add_arguments(self, parser):
        parser.add_argument('file', type=str)

    def handle(self, *args, **options):
        file_path = options['file']
        with open(file_path, encoding="utf-8") as f:
            reader = csv.reader(f)
            next(reader)  # skip header row
            for row in reader:
                id, bio, college, country, createdAt, dob, email, face_detection_probabilities, gender, height, insta_username, interests, is_habit_drink, is_habit_smoke, is_verified, mobile, name, status, type, updatedAt, verified_at, what_to_find, who_to_date, is_subscribed = row
                Person.objects.create(id=id, bio=bio, college=college, country=country, createdAt=createdAt, dob=dob, email=email, face_detection_probabilities=face_detection_probabilities, gender=gender, height=height, insta_username=insta_username, interests=interests, is_habit_drink=is_habit_drink, is_habit_smoke=is_habit_smoke, is_verified=is_verified, mobile=mobile, name=name, status=status, type=type, updatedAt=updatedAt, verified_at=verified_at, what_to_find=what_to_find, who_to_date=who_to_date, is_subscribed=is_subscribed)
        self.stdout.write(self.style.SUCCESS('Data imported successfully'))
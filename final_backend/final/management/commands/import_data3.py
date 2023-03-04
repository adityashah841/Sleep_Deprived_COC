import csv
from django.core.management.base import BaseCommand
from final.models import Recommendation

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
                id, height, is_habit_drink, is_habit_smoke, is_verified, what_to_find, who_to_date, score = row
                Recommendation.objects.create(id=id, height=height, is_habit_drink=is_habit_drink, is_habit_smoke=is_habit_smoke, is_verified=is_verified, what_to_find=what_to_find, who_to_date=who_to_date, score=score)
        self.stdout.write(self.style.SUCCESS('Data imported successfully'))
import csv
from django.core.management.base import BaseCommand
from final.models import Swipes, Person

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
                id, first_like_unlike_at, first_msg, first_type, is_unmatch, like_count, p1, p1_extend_at, p2, p2_extend_at, second_like_unlike_at, second_msg, second_type, unmatch_on = row
                person1 = Person.objects.get(id=row[6])
                person2 = Person.objects.get(id=row[8])
                Swipes.objects.create(id=id, first_like_unlike_at=first_like_unlike_at, first_msg=first_msg, first_type=first_type, is_unmatch=is_unmatch, like_count=like_count, p1=person1, p1_extend_at=p1_extend_at, p2=person2, p2_extend_at=p2_extend_at, second_like_unlike_at=second_like_unlike_at, second_msg=second_msg, second_type=second_type, unmatch_on=unmatch_on)
        self.stdout.write(self.style.SUCCESS('Data imported successfully'))
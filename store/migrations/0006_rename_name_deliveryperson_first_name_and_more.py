# Generated by Django 4.2.6 on 2023-10-19 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0005_order_delivery_person'),
    ]

    operations = [
        migrations.RenameField(
            model_name='deliveryperson',
            old_name='name',
            new_name='first_name',
        ),
        migrations.AddField(
            model_name='deliveryperson',
            name='last_name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
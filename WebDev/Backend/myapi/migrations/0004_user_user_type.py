# Generated by Django 4.0.3 on 2022-04-07 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0003_remove_level_song_id_level_duration_level_song_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='user_type',
            field=models.CharField(default='User', max_length=60),
        ),
    ]

# Generated by Django 3.0.7 on 2020-06-08 11:56

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TutorialSeries',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tutorial_series', models.CharField(blank=True, max_length=200, null=True)),
                ('series_summary', models.CharField(blank=True, max_length=200, null=True)),
                ('series_image', models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d')),
            ],
            options={
                'verbose_name_plural': 'Series',
            },
        ),
        migrations.AddField(
            model_name='archive',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d'),
        ),
        migrations.AlterField(
            model_name='archive',
            name='archive_published',
            field=models.DateTimeField(default=datetime.datetime(2020, 6, 8, 14, 56, 18, 378454), verbose_name='date published'),
        ),
        migrations.AlterField(
            model_name='tutorial',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d'),
        ),
        migrations.AlterField(
            model_name='tutorial',
            name='tutorial_published',
            field=models.DateTimeField(default=datetime.datetime(2020, 6, 8, 14, 56, 18, 377838), verbose_name='date published'),
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=80, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('body', models.TextField(blank=True, null=True)),
                ('created_on', models.DateTimeField(auto_now_add=True, null=True)),
                ('tutorial', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='main.Tutorial')),
            ],
            options={
                'ordering': ['created_on'],
            },
        ),
        migrations.AddField(
            model_name='tutorial',
            name='tutorial_series',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='main.TutorialSeries'),
        ),
    ]

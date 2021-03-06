# Generated by Django 3.0.7 on 2020-06-09 02:54

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20200608_1823'),
    ]

    operations = [
        migrations.AlterField(
            model_name='archive',
            name='archive_published',
            field=models.DateTimeField(default=datetime.datetime(2020, 6, 9, 5, 54, 12, 772295), verbose_name='date published'),
        ),
        migrations.AlterField(
            model_name='tutorial',
            name='tutorial_published',
            field=models.DateTimeField(default=datetime.datetime(2020, 6, 9, 5, 54, 12, 771581), verbose_name='date published'),
        ),
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('likesum', models.CharField(max_length=200, null=True)),
                ('comment', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.Comment')),
            ],
        ),
    ]

from django.contrib import admin
from .models import Task
# Register your models here.

# admin.site.register(Task)

@admin.register(Task)
class AdminTask(admin.ModelAdmin):
    list_display=['user','title','description','complete','created']
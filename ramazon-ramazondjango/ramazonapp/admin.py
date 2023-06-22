from django.contrib import admin
from .models import *

@admin.register(Product)
class CursoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'cantidad')
    ordering = ('-nombre',)
    search_fields = ('nombre',)
    list_editable = ('cantidad',)

# Register your models here.
#admin.site.register(Product)
admin.site.register(Usuario)
#admin.site.register(Product, CursoAdmin)
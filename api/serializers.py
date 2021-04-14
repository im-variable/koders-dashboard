from rest_framework import serializers
from .models import Store


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = ('id', 'image', 'uploaded_at')


class UploadStoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = ('image',)



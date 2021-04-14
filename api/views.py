from django.shortcuts import render
from rest_framework import generics
from .serializers import StoreSerializer, UploadStoreSerializer
from .models import Store
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class StoreView(generics.ListAPIView):
    queryset = Store.objects.all()
    
    serializer_class = StoreSerializer


class DeleteView(APIView):
    serializer_class = StoreSerializer
    delete_id = 'id'

    def delete(self, request, format=None):
        id = request.GET.get('id')
        print('id', id)

        if id != None:
            store = Store.objects.filter(id=id).first()
            print('store',store)
            store.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
            
        return Response({'Bad Request': 'No image found'}, status=status.HTTP_400_BAD_REQUEST)


class UploadView(APIView):
    serializer_class = UploadStoreSerializer
    
    def post(self, request, format=None):
        image=request.FILES['image']
        if image:
            upload = Store(image=image)
            upload.save()
            return Response(UploadStoreSerializer(upload).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
    
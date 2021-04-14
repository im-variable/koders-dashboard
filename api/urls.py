from django.urls import path
from .views import StoreView, UploadView, DeleteView

urlpatterns = [
    path('store', StoreView.as_view()),
    path('upload', UploadView.as_view()),
    path('delete', DeleteView.as_view())
]

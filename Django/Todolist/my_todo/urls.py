from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('createTodo/', views.createTodo, name='createTodo'),
    # path에 매핑할 때 url 대신 name을 이용해 접근 가능 (reverse 함수 사용)
    path('deleteTodo/', views.doneTodo, name='deleteTodo')
]
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from .models import *
# .: 같은 위치, 이 파일과 같은 위치에 있는 models.py에서 모든 것을 가져오겠다

def index(request):
    # return HttpResponse("my todo app first page")
    # HttpResponse: 인자로 받은 문자열을 사용자 화면에 보여주는 단순한 함수
    # return render(request, "my_todo/index.html")

    # 데이터베이스에 저장된 데이터들 보여주기
    todos = Todo.objects.all() # Todo model, object에 접근하여 all()함수로 모든 데이터를 가져온다
    content = {'todos': todos} # dict형태로 todos라는 key값에 할당한다
    return render(request, 'my_todo/index.html', content) # render 함수로 content dict를 전달해준다

def createTodo(request):
    # HTML input 태그의 name(todoContent)을 통해 문자열 받아오기
    user_input_str = request.POST['todoContent']

    # model 데이터베이스에 데이터 저장하기
    new_todo = Todo(content = user_input_str) # 데이터가 단순히 존재
    new_todo.save() # 데이터를 저장

    # return HttpResponse("create Todo" + user_input_str)

    return HttpResponseRedirect(reverse('index'))
    # 1. reverse 함수를 통해 urls.py에서 index라는 url을 찾는다
    # 2. HttpResponseRedirect 함수를 통해 해당 url로 이동한다

def doneTodo(request):
    done_todo_id = request.GET['todoNum']
    # index.html의 form 태그에서 method GET으로 보냈기 때문에 request에서도 GET으로 받는다
    print('완료한 todo의 id:', done_todo_id)

    todo = Todo.objects.get(id=done_todo_id)
    todo.delete()
    return HttpResponseRedirect(reverse('index'))
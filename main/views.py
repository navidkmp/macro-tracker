from django.shortcuts import render, redirect
from .models import Food, Consume


def index(request):
    if request.method == "POST":
        #getting the id of item selected from our front-end
        consumed_food_id = request.POST["food"]
        #passing the id and getting the actual food item from our model
        food = Food.objects.get(id=consumed_food_id)
        #getting the logged in user from request object
        user = request.user
        #creating the consume object, consuming food
        consume = Consume(user=user,food_consume=food)
        consume.save()

    foods = Food.objects.all()
    consumed_foods = Consume.objects.filter(user=request.user)
    return render(request, 'main/index.html', {'foods': foods, 'consumed_foods': consumed_foods})


def delete_consume(request,id):
    if request.method == "POST":
        consumed_food = Consume.objects.get(id=id)
        consumed_food.delete()
        return redirect("/")
    return render(request,"main/delete.html")
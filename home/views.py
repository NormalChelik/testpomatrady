from django.shortcuts import render


def home(requests):
    return render(requests, "home.html")

def test1(requests):
    return render(requests, "test#1.html")
def test2(requests):
    return render(requests, "test#2.html")
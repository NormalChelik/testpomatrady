from django.shortcuts import render
from django.http import FileResponse, Http404

def pdf_view_2(request):
    try:
        return FileResponse(open('static/PDF/wepik_kristallizaciia_i_steklovanie_v_materialax_radioelektroniki.pdf', 'rb'), content_type='application/pdf')
    except FileNotFoundError:
        raise Http404()

def pdf_view_1(request):
    try:
        return FileResponse(open('static/PDF/prezSysAndBel.pdf', 'rb'), content_type='application/pdf')
    except FileNotFoundError:
        raise Http404()

def home(requests):
    return render(requests, "home.html")

def test1(requests):
    return render(requests, "test#1.html")
def test2(requests):
    return render(requests, "test#2.html")
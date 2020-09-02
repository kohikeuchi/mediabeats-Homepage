from django.shortcuts import render, redirect
from .models import Contact

def home(request):
    if request.method=='POST':
        contact = Contact.objects.create(
            name = request.POST['name'],
            email = request.POST['email'],
            subject = request.POST['subject'],
            content = request.POST['content']
        )

        contact.save()
        completed= '送信完了しました'
        return render(request, 'index.html', {'completed': completed})

    return render(request, 'index.html' )




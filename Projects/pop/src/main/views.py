from django.shortcuts import render
from django.http import HttpResponse
import pytube
import os

# Create your views here.


def homepage(request):
    
    return render(request,'main/homepage.html')

def information(request):
    if request.method == 'GET':
        http = request.GET['http']
        if "youtube" in http:
            yt = pytube.YouTube(http)
            print(yt.title)
            stream = yt.streams.first()
            print(stream)
            stream.download()
            return HttpResponse(yt.title)
        else:
            code = "you-get {}".format(http)
            print(code)
            os.system(code)
            return HttpResponse("downloaded")
            
# "AIzaSyDN68XXnN03mWAeeFJsqiqYxFQs3ZfMdfI"

        

         # Sending an success response

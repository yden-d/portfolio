from django.http import HttpResponse

def index(request):
    return HttpResponse("Hey now! You're witnessing the barebones version of LiftTracker.")


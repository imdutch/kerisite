from django.shortcuts import render

# Create your views here.

#Every view function has request as the parameter to the function
def Home(request):
  #This is an example varaiable you can send to the html page
  name = "Christian Richmond"
  
  #To send variables to html file wrap them all in a dictionary
  context = {
    'name':name
  }

  #To display a certain html page use render with arguments
  # render(request,NAME_OF_HTML_FILE,context)

  return render(request,"home.html",context)

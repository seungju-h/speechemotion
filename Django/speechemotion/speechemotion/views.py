from django.shortcuts import render

def index(request):
    return render(request, "speechemotion/index.html")


from django.shortcuts import render, redirect

def login_view(request):
    if request.method == 'POST':
        # Perform your login logic here
        # For example:
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Check if the login credentials are valid
        if username == 'valid_username' and password == 'valid_password':
            # Authentication successful, redirect to "/level" page
            return redirect('level')
        else:
            # Authentication failed, return an error message
            return render(request, 'your_template.html', {'login_failed': True})

    return render(request, 'your_template.html')

def level_view(request):
    # Your logic for the "/level" page
    return render(request, 'speechemotion/level.html')
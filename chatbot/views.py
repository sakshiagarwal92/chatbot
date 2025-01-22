from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.timezone import now
import json

from .models import User, Message

@csrf_exempt
def send_message(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_id = data.get('user_id')
            message = data.get('message')

            if not user_id or not message:
                return JsonResponse({'error': 'user_id and message are required.'}, status=400)

            # Check if the user exists
            try:
                user = User.objects.get(id=user_id)
            except User.DoesNotExist:
                return JsonResponse({'error': 'User not found.'}, status=404)

            # Save user message
            Message.objects.create(user=user, sender='user', message=message, timestamp=now())

            # Basic bot response logic
            response_message = "I'm a bot. How can I help you?"
            Message.objects.create(user=user, sender='bot', message=response_message, timestamp=now())

            return JsonResponse({'response': response_message}, status=200)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid HTTP method'}, status=405)
    
@csrf_exempt
def get_messages(request):
    user_id = request.GET.get('user_id')  # Get user_id from the query string
    if not user_id:
        return JsonResponse({"error": "User ID is required"}, status=400)
    
    messages = Message.objects.filter(user_id=user_id).values()
    return JsonResponse(list(messages), safe=False)
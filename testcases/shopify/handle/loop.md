{% for product in collections[settings.home_featured_collection].products %}
    {{ product.title }}
{% endfor %}

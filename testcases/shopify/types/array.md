{% assign product = { tags: ['a', 'b', 'c'] } %}

{% for tag in product.tags %}
  {{ tag }}
{% endfor %}

{{ product.tag[0] }}
{{ product.tag[1] }}
{{ product.tag[2] }}

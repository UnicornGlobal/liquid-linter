{% unless pages == empty %}
  <h1>{{ pages.frontpage.title }}</h1>
  <div>{{ pages.frontpage.content }}</div>
{% endunless %}

{% unless collections.frontpage == empty %}
  {% for product in collections.frontpage.products %}
    {% comment %}
    NOTE: You cannot test 'include' here so this example differs
    slightly from https://shopify.dev/docs/themes/liquid/reference/basics/types
    {% include "product-grid-item" %}
    {% endcomment %}


  {% else %}
    <p>We have a "frontpage" collection, but it's empty.</p>
  {% endfor %}
{% endunless %}

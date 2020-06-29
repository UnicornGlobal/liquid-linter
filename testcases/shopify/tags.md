{% if product.title == 'Awesome Shoes' %}
  You are buying some awesome shoes!
{% endif %}

{% unless product.title == 'Awesome Shoes' %}
  You are not buying awesome shoes.
{% endunless %}

{% if product.title != 'Awesome Shoes' %}
  You are not buying awesome shoes.
{% endif %}

{% if shipping_method.title == 'International Shipping' %}
  You're shipping internationally. Your order should arrive in 2–3 weeks.
{% elsif shipping_method.title == 'Domestic Shipping' %}
  Your order should arrive in 3–4 days.
{% else %}
  Thank you for your order!
{% endif %}

{% case shipping_method.title %}
  {% when 'International Shipping' %}
     You're shipping internationally. Your order should arrive in 2–3 weeks.
  {% when 'Domestic Shipping' %}
    Your order should arrive in 3–4 days.
  {% when 'Local Pick-Up' %}
    Your order will be ready for pick-up tomorrow.
  {% else %}
     Thank you for your order!
{% endcase %}

{% if line_item.grams > 20000 and customer_address.city == 'Ottawa' %}
  You're buying a heavy item, and live in the same city as our store. Choose local pick-up as a shipping option to avoid paying high shipping costs.
{% endif %}

{% if customer.tags contains 'VIP' or customer.email contains 'mycompany.com' %}
  Welcome! We're pleased to offer you a special discount of 15% on all products.
{% else %}
  Welcome to our store!
{% endif %}

{% for product in collection.products %}
  {{ product.title }}
{% endfor %}

{% for product in collection.products %}
  {{ product.title }}
{% else %}
  The collection is empty.
{% endfor %}

{% for i in (1..5) %}
  {% if i == 4 %}
    {% break %}
  {% else %}
    {{ i }}
  {% endif %}
{% endfor %}

{% for i in (1..5) %}
  {% if i == 4 %}
    {% continue %}
  {% else %}
    {{ i }}
  {% endif %}
{% endfor %}

  <!-- numbers = [1,2,3,4,5] -->

  {% for item in numbers limit:2 %}
    {{ item }}
  {% endfor %}

  <!-- numbers = [1,2,3,4,5] -->
  {% for item in numbers offset:2 %}
    {{ item }}
  {% endfor %}

{% for i in (3..5) %}
  {{ i }}
{% endfor %}

{% assign my_limit = 4 %}
{% for i in (1..my_limit) %}
{{ i }}
{% endfor %}

<!-- if array = [1,2,3,4,5,6] -->
{% for item in array reversed %}
  {{ item }}
{% endfor %}

{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}

<ul>
  {% for product in collections.collection-1.products %}
    <li{% cycle ' style="clear:both;"', '', '', ' class="last"' %}>
      <a href="{{ product.url | within: collection }}">
        <img src="{{ product.featured_image.src | img_url: '240x' }}" alt="{{ product.featured_image.alt }}" />
      </a>
    </li>
  {% endfor %}
</ul>

<ul>
  {% for product in collections.collection-2.products %}
    <li{% cycle ' style="clear:both;"', '', '', ' class="last"' %}>
      <a href="{{ product.url | within: collection }}">
        <img src="{{ product.featured_image.src | img_url: '240x' }}" alt="{{ product.featured_image.alt }}" />
      </a>
    </li>
  {% endfor %}
</ul>

<ul>
{% for product in collections.collection-1.products %}
  <li{% cycle 'group1': ' style="clear:both;"', '', '', ' class="last"' %}>
    <a href="{{ product.url | within: collection }}">
      <img src="{{ product.featured_image.src | img_url: '240x' }}" alt="{{ product.featured_image.alt }}" />
    </a>
  </li>
{% endfor %}
</ul>

<ul>
{% for product in collections.collection-2.products %}
  <li{% cycle 'group2': ' style="clear:both;"', '', '', ' class="last"' %}>
    <a href="{{ product.url | within: collection }}">
      <img src="{{ product.featured_image.src | img_url: '240x' }}" alt="{{ product.featured_image.alt }}" />
    </a>
  </li>
{% endfor %}
</ul>

<table>
  {% tablerow product in collection.products %}
    {{ product.title }}
  {% endtablerow %}
</table>

<table>
  {% tablerow product in collection.products cols:2 %}
    {{ product.title }}
  {% endtablerow %}
</table>

{% tablerow product in collection.products cols:2 limit:3 %}
  {{ product.title }}
{% endtablerow %}

{% tablerow product in collection.products cols:2 offset:3 %}
  {{ product.title }}
{% endtablerow %}

<table>
  {% tablerow i in (3..5) %}
    {{ i }}
  {% endtablerow %}
</table>

{% assign num = 4 %}
<table>
  {% tablerow i in (1..num) %}
    {{ i }}
  {% endtablerow %}
</table>

My name is Wilson Abercrombie{% comment %}, esquire{% endcomment %}.

{% liquid
if product.featured_image
  echo product.featured_image | img_tag
else
  echo 'product-1' | placeholder_svg_tag
endif %}

{% form 'new_comment', article %}
...
{% endform %}

{% form 'activate_customer_password' %}
...
{% endform %}

{% form 'contact' %}
...
{% endform %}

{% form 'currency' %}
  {{ form | currency_selector }}
  <button type="submit">Submit</button>
{% endform %}

{% form 'currency' %}
  <select name="currency">
    {% for currency in shop.enabled_currencies %}
      {% if currency == cart.currency %}
        <option selected="true">{{currency.iso_code}}</option>
      {% else %}
        <option>{{currency.iso_code}}</option>
      {% endif %}
    {% endfor %}
  </select>
  <button type="submit">Submit</button>
{% endform %}

{% form 'customer' %}
...
{% endform %}

{% form 'create_customer' %}
...
{% endform %}

{% form 'customer_address', customer.new_address %}
...
{% endform %}

{% form 'customer_login' %}
...
{% endform %}

{% form 'guest_login' %}
...
{% endform %}

{% form 'new_comment', article %}
...
{% endform %}

{% form "product", product %}
  ...
{% endform %}

{% form 'recover_customer_password' %}
...
{% endform %}

{% form 'reset_customer_password' %}
...
{% endform %}

{% form 'storefront_password' %}
...
{% endform %}

{% form "product", product, id: "newID", class: "custom-class", data-example: "100" %}
  ...
{% endform %}

{% capture 'form_id' %}addToCartForm-{{ section.id }}{% endcapture %}

{% form 'product', product, id:form_id %}
...
{% endform %}

{% layout 'full-width' %}

{% liquid
case section.blocks.size
when 1
  assign column_size = ''
when 2
  assign column_size = 'one-half'
when 3
  assign column_size = 'one-third'
else
  assign column_size = 'one-quarter'
endcase %}

{% paginate collection.products by 5 %}
  {% for product in collection.products %}
    <!--show product details here -->
  {% endfor %}
{% endpaginate %}

{% raw %}{{ 5 | plus: 6 }}{% endraw %} equals 11.

{% render 'snippet-name' %}

{% assign my_variable = 'apples' %}
{% assign featured_product = all_products['product_handle'] %}

{% render 'product' with featured_product as product %}
{% render 'name', my_variable: my_variable, my_other_variable: 'oranges' %}

{% assign variants = product.variants %}
{% render 'variant' for variants as variant %}

{% section 'header' %}
head
{% endsection %}

{% style %}
  .hero__background-color-container {
    background-color: {{ section.settings.background_color }}
  }
{% endstyle %}

{% assign favorite_food = 'apples' %}

My favorite food is {{ favorite_food }}.

{% assign first_time_visitor = true %}
{% if first_time_visitor == true %}
  Welcome to the site!
{% endif %}

{% assign favorite_food = 'pizza' %}
{% assign age = 35 %}

{% capture about_me %}
I am {{ age }} and my favorite food is {{ favorite_food }}.
{% endcapture %}

{{ about_me }}

<ul>
  <li class="item-{% increment counter %}">apples</li>
  <li class="item-{% increment counter %}">oranges</li>
  <li class="item-{% increment counter %}">peaches</li>
  <li class="item-{% increment counter %}">plums</li>
</ul>

{% assign my_number = 10 %}

{% increment my_number %}
{% increment my_number %}
{% increment my_number %}

{{ my_number }}

{% decrement variable %}
{% decrement variable %}
{% decrement variable %}

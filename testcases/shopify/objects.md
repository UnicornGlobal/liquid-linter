{{ product.title }} <!-- Output: “Awesome Shoes” -->

{{ all_products['wayfarer-shades'].title }}

{% assign article = articles['news/hello-world'] %}
{{ article.title | link_to: article.url }}

<ul>
  {% for article in blogs.myblog.articles  %}
   <li>{{ article.title | link_to: article.url }}</li>
  {% endfor %}
</ul>

{% for product in collections.frontpage.products %}
  {{ product.title }}
{% endfor %}

{% if current_page != 1 %}
  Page {{ current_page }}
{% endif %}

<!-- in blog.liquid -->
{% if current_tags %}
  <h1>{{ blog.title | link_to: blog.url }} &rsaquo; {{ current_tags.first }}</h1>
{% else %}
  <h1>{{ blog.title }}</h1>
{% endif %}

{% if shop.customer_accounts_enabled %}
  {% if customer %}
    <a href="/account">My Account</a>
    {{ 'Log out' | customer_logout_link }}
  {% else %}
    {{ 'Log in' | customer_login_link }}
    {% if shop.customer_accounts_optional %}
      {{ 'Create an account' | customer_register_link }}
    {% endif %}
  {% endif %}
{% endif %}

<ul>
 {% for link in linklists.categories.links %}
    <li>{{ link.title | link_to: link.url }}</li>
  {% endfor %}
</ul>

{% if handle contains 'hide-from-search' %}
  <meta name="robots" content="noindex">
{% endif %}

{% assign image = images['my-image.jpg'] %}
<img src="{{ image }}" alt="{{ image.alt }}">

<h1>{{ pages.about.title }}</h1>
<p>{{ pages.about.author }} says...</p>
<div>{{ pages.about.content }}</div>

{% if page_description %}
  <meta name="description" content="{{ page_description }}" />
{% endif %}

{% if scripts.cart_calculate_line_items %}
  <p>We are currently running a {{ scripts.cart_calculate_line_items.name }} promotion!</p>
{% endif %}

{% if settings.logo %}
  {{ settings.logo | img_url | img_tag: shop.name }}
{% else %}
  <span class="no-logo">{{ shop.name }}</span>
{% endif %}

<body class="{{ template }}">

Visit the <a href="/admin/themes/{{ theme.id }}/settings">theme editor</a>

{% if additional_checkout_buttons %}
  <div class="additional_checkout_buttons">{{ content_for_additional_checkout_buttons }}</div>
{% endif %}

{{ shipping_address.country }}

{{ shipping_address.country_code }}

Hello, {{ billing_address.name }}

{{ billing_address.province }}

{{ billing_address.province_code }}

{{ shipping_address.street }}

{{ address.url }}

<select name="country">
  {{ all_country_option_tags }}
</select>

{{ article.comment_post_url }}

{{ article.created_at | date: "%a, %b %d, %y" }}

{{ article.image.src | img_url: '500x' }}

{% for tag in article.tags %}
    {{ tag }}
{% endfor %}

{% for tag in article.tags %}
    {{ tag }} ({{ tag.total_count }})
{% endfor %}

{{ article.url }}

{% if article.user.image %}
  {{ article.user.image | img_url: '200x200' }}
{% endif %}

{% for block in section.blocks %}
  <!-- output block content -->
{% endfor %}

<img src="{{ block.settings.image | img_url: '800x' }}" alt="{{ block.settings.image.alt }}" />

{% for block in section.blocks %}
  {% if block.type == 'advert' %}
    <!-- output an image with a link -->
  {% elsif block.type == 'headline' %}
    <!-- output a header with text -->
  {% endif %}
{% endfor %}

{% for tag in blog.all_tags %}
    {{ tag }}
{% endfor %}

{% for article in blog.articles %}
    <h2>{{ article.title }}</h2>
{% endfor %}

<label>What is your Pet's name?</label>
<input type="text" name="attributes[your-pet-name]" value="{{ cart.attributes.your-pet-name }}" />

{{ attributes.your-pet-name }}

{% for discount_application in cart.cart_level_discount_applications %}
  Discount name: {{ discount_application.title }}
  Savings: -{{ discount_application.total_allocated_amount | money }}
{% endfor %}

{{ cart.currency.iso_code }}

{% for discount_application in cart.discount_applications %}
  Discount name: {{ discount_application.title }}
  Savings: -{{ discount_application.total_allocated_amount | money }}
{% endfor %}

{{ cart.item_count }} {{ cart.item_count | pluralize: 'item', 'items' }} ({{ cart.total_price | money }})


{{ cart.note }}

{{ note }}

{% if checkout.buyer_accepts_marketing %}
Thank you for subscribing to our newsletter. You will receive our exclusive newsletter deals!
{% endif %}

{% for discount_application in checkout.cart_level_discount_applications %}
  Discount name: {{ discount_application.title }}
  Savings: -{{ discount_application.total_allocated_amount | money }}
{% endfor %}

{% for discount_application in checkout.discount_applications %}
  Discount name: {{ discount_application.title }}
  Savings: -{{ discount_application.total_allocated_amount | money }}
{% endfor %}

You save: {{ checkout.discounts_amount | money }} <br>

<!-- subtotal = total dollar value of cart items - line item discount -->
Subtotal: {{ checkout.line_items_subtotal_price | money }}

{% if checkout.requires_shipping %}
You will receive an email with your shipment tracking number as soon as your order is shipped.
{% endif %}

Shipping methods: <br>
{% for shipping_method in checkout.shipping_methods %}
* {{ shipping_method.title }}: {{ shipping_method.price | money }} <br>
{% endfor %}

<!-- Total = subtotal + shipping cost - shipping discount + taxes -->
Total: {{ checkout.total_price | money }}

{{ collection.all_products_count }} total products in this collection

{% for product_type in collection.all_types %}
  {{ product_type | link_to_type }}
{% endfor %}

{% for product_vendor in collection.all_vendors %}
  {{ product_vendor | link_to_vendor }}
{% endfor %}

{% if collection.current_type %}
Browse all our {{ collection.current_type | downcase }}.
{% endif %}

{% if collection.current_vendor %}
All products by {{ collection.current_vendor }}.
{% endif %}

{% if collection.image %}{{ collection.image | img_url: 'medium' }}{% endif %}


{% if collection.next_product %}
  {{ 'Next product' | link_to: collection.next_product.url, collection.next_product.title }}
{% endif %}

{{ collection.products_count }} products

{% if collection.sort_by %}
  Sort by: {{ collection.sort_by }}
{% endif %}

<select name="sort_by">
{% for option in collection.sort_options %}
  <option value="{{ option.value }}">{{ option.name }}</option>
{% endfor %}
</select>

<option {% if option.value == collection.sort_by %}selected{% endif %} >
  ...
</option>

{{ collection.template_suffix }}

<h1>{{ collection.title }}</h1>

{{ comment.created_at | date: "%b %d, %Y" }}

<!-- Store ships only to Canada and the United Kingdom -->
<select name="country">
  {{ country_option_tags }}
</select>

<!-- Store ships only to Canada and the United Kingdom -->
<select name="country">
  <option value"---" data-provinces="[]">---</option>
  <option value="Canada" data-provinces="[["Alberta","Alberta"],["British Columbia","British Columbia"],["Manitoba","Manitoba"],["New Brunswick","New Brunswick"],["Newfoundland","Newfoundland"],["Northwest Territories","Northwest Territories"],["Nova Scotia","Nova Scotia"],["Nunavut","Nunavut"],["Ontario","Ontario"],["Prince Edward Island","Prince Edward Island"],["Quebec","Quebec"],["Saskatchewan","Saskatchewan"],["Yukon","Yukon"]]">Canada</option>
  <option value="United Kingdom" data-provinces="[]">United Kingdom</option>
</select>

ISO Code: {{ currency.iso_code }}
Name: {{ currency.name }}
Symbol: {{ currency.symbol }}

{{ page_title }} - Page: {{ current_page }}

<ul>
{% for tag in collection.all_tags %}
    {% if current_tags contains tag %}
          <li class="active">{{ tag | link_to_remove_tag: tag }}</li>
    {% else %}
          <li>{{ tag | link_to_add_tag: tag }}</li>
    {% endif %}
{% endfor %}
</ul>

{% if current_tags %}
  <h1>{{ blog.title | link_to: blog.url }} &raquo; {{ current_tags.first }}</h1>
{% else %}
  <h1>{{ blog.title }}</h1>
{% endif %}

{% if customer %}
  Customer is logged in. You can access the customer
  attributes such as {{ customer.first_name }}.
{% endif %}

{% for address in customer.addresses %}
  {{ address.street }}
{% endfor %}

Your last order was placed on: {{ customer.last_order.created_at | date: "%B %d, %Y %I:%M%p" }}

{% for order in customer.orders %}
{{ order.id }}
{% endfor %}

{% for tag in customer.tags %}
{{ tag }}
{% endfor %}

{{ customer_address.country }}


{{ customer_address.country_code }}

{{ customer_address.province }}

{{ customer_address.province_code }}

{{ shipping_address.street }}

{% assign external_videos = product.media | where: "media_type", "external_video" %}

{% for external_video in external_videos %}
  {{ external_video.external_id }}
{% endfor %}

{% assign external_videos = product.media | where: "media_type", "external_video" %}

{% for external_video in external_videos %}
  {{external_video.external_id}}
{% endfor %}

{{ settings.heading_font.baseline_ratio }}

{{ settings.heading_font.fallback_families }}

{{ settings.heading_font.family }}

{{ settings.heading_font.style }}

{{ settings.heading_font.weight }}

{% for variant in settings.heading_font.variants %}
    {{ variant.family }}
{% endfor %}

{% for product in collections.frontpage.products %}
    {% if forloop.first == true %}
        First time through!
    {% else %}
        Not the first time.
    {% endif %}
{% endfor %}

{% for product in collections.frontpage.products %}
    {{ forloop.index }}
{% else %}
    // no products in your frontpage collection
{% endfor %}

{% for product in collections.frontpage.products %}
  {{ forloop.index0 }}
{% endfor %}

{% for product in collections.frontpage.products %}
    {% if forloop.last == true %}
        This is the last iteration!
    {% else %}
        Keep going...
    {% endif %}
{% endfor %}

<!-- if collections.frontpage.products contains 4 products -->
{% for product in collections.frontpage.products %}
  {% if forloop.first %}
  <p>This collection has {{ forloop.length }} products:</p>
  {% endif %}
  <p>{{ product.title }}</p>
{% endfor %}

{% for product in collections.frontpage.products %}
    {{ forloop.rindex }}
{% endfor %}

{% for product in collections.frontpage.products %}
    {{ forloop.rindex0 }}
{% endfor %}

{% for error in form.errors %}
    {{ error }}
{% endfor %}

{% if form.errors %}
      {{ form.errors | default_errors }}
{% endif %}

{% for field in form.errors %}
  {% if field == 'form' %}
    {{ form.errors.messages[field] }}
  {% else %}
    {{ form.errors.translated_fields[field] }} - {{ form.errors.messages[field] }}
  {% endif %}
{% endfor %}

{% if form.posted_successfully? %}
    Comment posted successfully!
{% else %}
    {{ form.errors | default_errors }}
{% endif %}

{{ form.city }}, {{ form.province }}

{{ form.set_as_default_checkbox }}

We have fulfilled the following items:
<ul>
{% for line in fulfillment.fulfillment_line_items %}
  <li>{{ line.line_item.title }} x {{ line.quantity }}</li>
{% endfor %}
</ul>

We have fulfilled {{ fulfillment.item_count }} items of your recent order.


Tracking Company: {{ fulfillment.tracking_company }}


Tracking Number: {{ fulfillment.tracking_number }}


{{ fulfillment.tracking_url }}

Hey, {{ gift_card.customer.first_name }}!

{% if handle contains 'secret' %}
  <p>Shh! This is between you and us.</p>
{% endif %}

{% if handle %}
  <p>You are either looking at a product, a collection, a page, a blog, or an article in a blog.<p>
{% else %}
  <p>You must be somewhere else. Hope you're having fun!</p>
{% endif %}

{% assign images = product.media | where: "media_type", "image" %}
{% for image in images %}
  {{ image.alt }}
{% endfor %}

{% for image in product.images %}
    {{ image.src  }}
    {{ image }}
{% endfor %}

{{ image | img_url: "medium" }}

{% for image in product.images %}
    {% for variant in image.variants %}
            {{ image.src }} - used for the variant: {{ variant.title }}
      {% endfor %}
{% endfor %}

{{ line_item.image | img_url: '100x100' | img_tag }}
{{ line_item | img_url: '100x100' | img_tag }}

{{ line_item.key }}

{% unless line_item.product.has_only_default_variant %}
  <ul>
    {% for option in line_item.options_with_values %}
      <li>{{ option.name }}: {{ option.value }}</li>
    {% endfor %}
  </ul>
{% endunless %}

{% unless line_item.properties == empty %}
<ul>
  {% for property in line_item.properties %}
  <li>{{ property.first }}: {{ property.last }}</li>
  {% endfor %}
</ul>
{% endunless %}

{{ line_item.title }}

Product title: {{ line_item.product.title }}
Variant title: {{ line_item.variant.title }}

{{ linklists.main.title }}

{% for link in linklists.main.links %}
  {{ link.title }}: child_active: {{ link.child_active }}
  {% for sub_link in link.links %}
    {{ sub_link.title }}: child_active: {{ sub_link.child_active }}
    {% for sub_sub_link in sub_link.links %}
      {{ sub_sub_link.title }}: active: {{ sub_sub_link.active }}
    {% endfor %}
  {% endfor %}
{% endfor %}

{% for link in linklists.main.links %}
  <a href="{{ link.url }}"
    {% if link.current %}aria-current="page" class="highlight"{% endif %}
  >
   {{ link.title }}
  </a>
{% endfor %}

{{ linklists.main.title }}

{% for link in linklists.main.links %}
  {{ link.title }}: child_current: {{ link.child_current }}
  {% for sub_link in link.links %}
    {{ sub_link.title }}: child_current: {{ sub_link.child_current }}
    {% for sub_sub_link in sub_link.links %}
      {{ sub_sub_link.title }}: current: {{ sub_sub_link.current }}
    {% endfor %}
  {% endfor %}
{% endfor %}

{% assign menu = linklists.main-menu %}

{{ menu.title }}: {{ menu.levels }}
{% for link in menu.links %}
  {{ link.title }}: {{ link.levels }}
  {% for sub_link in link.links %}
    {{ sub_link.title }}: {{ sub_link.levels }}
    {% for sub_sub_link in sub_link.links %}
      {{ sub_sub_link.title }}: {{ sub_sub_link.levels }}
    {% endfor %}
  {% endfor %}
{% endfor %}

<!-- If the product links to a product with a price of $10 -->
{{ link.object.price | money }}

{% assign menu = linklists.main-menu %}
{{ menu.title }}: {{ menu.levels }}

{% for link in linklists.main-menu.links %}
  <a href="{{ link.url }}">{{ link.title }}</a>
{% endfor %}

{% assign instructions = product.metafields.instructions %}
{% assign key = 'Wash' %}
<ul>
  <li>Wash: {{ instructions[key] }}</li>
  <li>Wash: {{ instructions['Wash'] }}</li>
  <li>Wash: {{ instructions.Wash }}</li>
</ul>

{% assign instructions = product.metafields.instructions %}
{% assign key = 'Dry' %}
<ul>
  <li>Dry: {{ instructions[key] }}</li>
  <li>Dry: {{ instructions['Dry'] }}</li>
  <li>Dry: {{ instructions.Dry }}</li>
</ul>

<ul>
   {% for field in product.metafields.instructions %}
   <li>{{ field | first }}: {{ field | last }}</li>
   {% endfor %}
</ul>

Storage instructions:
<ul>
  {% for key_value in product.metafields.instructions['storage'] %}
    <li>{{ key_value[0] }}: {{ key_value[1] }}</li>
  {% endfor %}
</ul>

{%- assign tabs = product.metafields.tabs -%}
<ul class="tabs">
    {% comment %} cannot include in unit tests
    {% include 'product-description' %}
    {% endcomment %}
    {%- for field in tabs -%}
        <li><h2>{{ field | first }}</h2>{{ field | last }}</li>
    {%- endfor -%}
    {% comment %} cannot include in unit tests
    {% include 'related-products' %}
    {% endcomment %}
</ul>

{% unless product.metafields.Acme134-instructions.Wash == blank %}
Wash: {{ product.metafields.Acme134-instructions.Wash }}
{% endunless %}


{%- if product.metafields.style.colour != blank -%}
  {%- assign mColour = product.metafields.style.colour -%}
  <style>
      .add-to-cart {
        background: {{ mColour }}
      }
  </style>
{%- endif -%}

{% if backorder != blank %}<div>This item is backordered, and will ship in {{ backorder }}</div>{% endif %}

<div class="stock-sold-bar">
<span data-start="{{ startCount }}" data-stock="{{ currentCount }}" data-percent="{{ soldPercent }}"></span>
</div>

{%- assign locations = product.metafields.locations -%}
{%- assign items = locations | split: ';' -%}
<ul class="store-location">
    {%- for item in items -%}
        {% assign stock = item | split:',' %}
        <li>{{ stock | first }}: {{ stock | last }}</li>
    {%- endfor -%}
</ul>

{%- assign r = product.metafields.related.items | split:"," -%}
<div class="related-products">
    {%- for p in r -%}
        {% assign relatedProduct = all_products[p] %}
        {% comment %} cannot include in unit tests
        {%- include 'some-snippet' product: relatedProduct -%}
        {% endcomment %}
    {%- endfor -%}
</div>

{%- assign cParent = product.metafields.col.parent -%}
{%- assign cChild = product.metafields.col.child -%}
<div>
    {%- if collections[cChild].products.size > 0 -%}
       {% comment %} cannot include in unit tests
       {%- include 'collection-loop' with collections[cChild] -%}
       {% endcomment %}
    {%- endif -%}
</div>

{% assign models = product.media | where: "media_type", "model" %}

{% for model in models %}
  {{ model.alt }}
{% endfor %}

{% if order.attributes %}
  <p>Order notes:</p>
  <ul>
    {% for attribute in order.attributes %}
      <li><strong>{{ attribute | first }}</strong>: {{ attribute | last }}</li>
    {% endfor %}
  </ul>
{% endif %}

English: {{ order.cancel_reason }}
French: {{ order.cancel_reason_label }}

{% for discount_application in order.cart_level_discount_applications %}
  Discount name: {{ discount_application.title }}
  Savings: -{{ discount_application.total_allocated_amount | money }}
{% endfor %}

{{ order.name | link_to: order.customer_url }}

{% for discount_application in order.discount_applications %}
  Discount name: {{ discount_application.title }}
  Savings: -{{ discount_application.total_allocated_amount | money }}
{% endfor %}

English: {{ order.financial_status }}
French: {{ order.financial_status_label }}

English: {{ order.fulfillment_status }}
French: {{ order.fulfillment_status_label }}

<!-- subtotal = total dollar value of cart items - line item discount -->
Subtotal: {{ order.line_items_subtotal_price | money }}

{{ order.name }}

Special instructions: {{ order.note }}

{{ order.order_number }}

{% for tag in order.tags %}
    {{ tag }}
{% endfor %}

{% for tax_line in order.tax_lines %}
  Tax ({{ tax_line.title }} {{ tax_line.rate | times: 100 }}%): {{ tax_line.price | money }}
{% endfor %}

<!-- on page.contact.liquid -->
{{ page.template_suffix }}

{{ page.url }}

{{ page_description }}

{{ page_title }}

{% if paginate.next.is_link %}
    <a href="{{ paginate.next.url }}">{{ paginate.next.title }}</a>
{% endif %}

{% if paginate.previous.is_link %}
    <a href="{{ paginate.previous.url }}">{{ paginate.previous.title }}</a>
{% endif %}

{% for part in paginate.parts %}
  {% if part.is_link %}
    {{ part.title | link_to: part.url}}
  {% endif %}
{% endfor %}

{% assign policy = shop.privacy_policy %}

{{ policy.body }}

{{ shop.privacy_policy }}

{% for policy in shop.policies %}
  {{ policy.title }}
{% endfor %}

{% for policy in shop.policies %}
  {{ policy.url }}
{% endfor %}

This product belongs in the following collections:

{% for collection in product.collections %}
    {{ collection.title }}
{% endfor %}

{{ product.created_at }}

URL: {{ product.featured_image }}
Aspect ratio: {{ product.featured_image.aspect_ratio }}
URL: {{ product.featured_image.src }}

{% if product.has_only_default_variant %}
  <input name="id" value="{{ variant.id }}" type="hidden">
{% else %}
  <select name="id">
    {% for variant in product.variants %}
      <option value="{{ variant.id }}">{{ variant.title }}</option>
    {% endfor%}
  </select>
{% endif %}

{{ product | img_url }}

{{ product.media }}

{% for media in product.media %}
  {% comment %} cannot include in unit tests
  {% include 'media' %}
  {% endcomment %}
{% endfor %}

{% for option in product.options %}
    {{ option }}
{% endfor %}

{{ product.options.size }}

<label>
  Color
  <select>
    {% for color_option in product.options_by_name['Color'].values %}
      <option>{{ color_option }}</option>
    {% endfor %}
  </select>
</label>

{% for product_option in product.options_with_values %}
  <label>
    {{ product_option.name }}
    <select>
      {% for value in product_option.values %}
        <option {% if product_option.selected_value == value %}selected{% endif %}>
          {{ value }}
        </option>
      {% endfor %}
    </select>
  </label>
{% endfor %}

{{ product.selected_variant.id }}

{% for tag in product.tags %}
  {{ tag }}
{% endfor %}

{{ product.template_suffix }}

{{ product.url }}

<ul>
  {% for product_option in product.options_with_values %}
    <li>{{ product_option.position }} - {{ product_option.name }} </li>
  {% endfor %}
</ul>

<select>
  {% for value in product_option.values %}
    <option {% if product_option.selected_value == value %}selected{% endif %}>
      {{ value }}
    </option>
  {% endfor %}
</select>

<ul>
  {% for value in product_option.values %}
    <li>{{ value }}</li>
  {% endfor %}
</ul>

{% if recommendations.performed %}
  {% if recommendations.products_count > 0 %}
    {% for product in recommendations.products %}
      {{ product.title | link_to: product.url }}
    {% endfor %}
  {% endif %}
{% else %}
  <div class="placeholder">Placeholder animation</div>
{% endif %}

{{ request.host }}

{% if request.host == 'myshop.com' %}
  Welcome USA!
{% elsif request.host == 'myshop.ca' %}
 Welcome Canada!
{% else %}
  Welcome!
{% endif %}

{{ request.locale.name }}

{{ request.path }}

{{ routes.root_url }}

{{ routes.account_url }}


{{ routes.account_login_url }}

{{ routes.account_logout_url }}

{{ routes.account_register_url }}

{{ routes.account_addresses_url }}

{{ routes.collections_url }}

{{ routes.all_products_collection_url }}

{{ routes.search_url }}

{{ routes.cart_url }}

{{ routes.cart_add_url }}

{{ routes.cart_change_url }}

{{ routes.cart_clear_url }}

{{ routes.product_recommendations_url }}

{% if scripts.cart_calculate_line_items %}
  <p>Check out our sale: {{ scripts.cart_calculate_line_items.name }}</p>
{% endif %}

{% if search.performed %}
    <!-- Show search results -->
{% endif %}

{% for item in search.results %}
  <h3>{{ item.title | link_to: item.url }}</h3>
{% endfor %}

{% for item in search.results %}
  <h3>{{ item.title | link_to: item.url }}</h3>
  {% if item.object_type == 'article' %}
    {% comment %}
      'item' is an article
      All article object properties can be accessed.
    {% endcomment %}

    {% if item.image %}
      <div class="result-image">
        <a href="{{ item.url }}" title="{{ item.title | escape }}">
          {{ item | img_url: 'small' | img_tag: item.title }}
        </a>
      </div>
    {% endif %}

  {% elsif item.object_type == 'page' %}
    {% comment %}
      'item' is a page.
      All page object properties can be accessed.
    {% endcomment %}

  {% else %}
    {% comment %}
      'item' is a product.
      All product object properties can be accessed.
    {% endcomment %}

    {% if item.featured_image %}
      <div class="result-image">
        <a href="{{ item.url }}" title="{{ item.title | escape }}">
          {{ item.featured_image | img_url: 'small' | img_tag: item.featured_image.alt }}
        </a>
      </div>
    {% endif %}
  {% endif %}

  <span>{{ item.content | strip_html | truncatewords: 40 | highlight: search.terms }}</span>
{% endfor %}

{{ item.content | highlight: search.terms }}

<h2>{{ section.settings.heading }}</h2>
<a href="{{ section.settings.featured_collection.url }}">This week's best selling items</a>

{{ shipping_method.handle }}

{{ shipping_method.original_price | money }}

{{ shipping_method.price | money }}

{{ shipping_method.title }}

<ul>
{% for policy in shop.policies %}
  <li>{{ policy.title }}</li>
{% endfor %}
</ul>

{{ shop.privacy_policy.title }}

{% for locale in shop.published_locales %}
  {{ locale.name }} ({{ locale.iso_code }})
{% endfor %}

{{ shop.secure_url }}

{% if shop.taxes_included %}
  Taxes included
{% else %}
  Excluding taxes
{% endif %}

{% for product_type in shop.types %}
  {{ product_type | link_to_type }}
{% endfor %}

{% for product_vendor in shop.vendors %}
  {{ product_vendor | link_to_vendor }}
{% endfor %}

{{ tax_line.price | money }}

<!-- If you're on the product.alternate.liquid template -->
{{ template }}

{{ template.directory }}

{{ template.name }}

{{ template.suffix }}

Visit the <a href="/admin/themes/{{ theme.id }}/settings">theme editor</a> to change your logo.

{{ transaction.gateway }}

{{ transaction.name }}

{{ transaction.payment_details.credit_card_company }}

{{ transaction.payment_details.credit_card_number }}


{{ transaction.payment_details.gift_card.last_four_characters }}


English: {{ transaction.status }}
French: {{ transaction.status_label }}

{% assign videos = product.media | where: "media_type", "video" %}

{% for video in videos %}
  {{ video.alt }}
{% endfor %}

{% for discount in checkout.discounts %}
* {{ discount.code }}: {{ discount.amount | money }}
{% endfor %}

{% for discount in order.discounts %}
  Code: {{ discount.code }}
  Savings: {{ discount.savings | money }}
{% endfor %}

{{ page_image | img_url }}



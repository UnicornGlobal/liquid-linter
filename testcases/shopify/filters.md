{{ product.title | upcase }}

{{ product.title | remove: "Awesome" }}

{{ product.title | upcase | remove: "AWESOME"  }}

{{ product.tags | join: ', ' }}

<!-- product.tags = "sale", "mens", "womens", "awesome" -->
{{ product.tags | first }}

{% if product.tags.first == "sale" %}
  This product is on sale!
{% endif %}

<!-- product.tags = "sale", "mens", "womens", "awesome" -->
{{ product.tags | last }}

{% if product.tags.last == "sale"%}
  This product is on sale!
{% endif %}

<!-- product.title = "Awesome Shoes" -->
{{ product.title | last }}

{% assign fruits = "apples, oranges, peaches, tomatoes" | split: ", " %}
{% assign vegetables = "broccoli, carrots, lettuce, tomatoes" | split: ", " %}

{% assign plants = fruits | concat: vegetables %}

{{ plants | join: ", " }}

{% assign fruits = "apples, oranges, peaches" | split: ", " %}
{% assign vegetables = "broccoli, carrots, lettuce" | split: ", " %}
{% assign animals = "dogs, cats, birds" | split: ", " %}

{% assign things = fruits | concat: vegetables | concat: animals %}

{{ things | join: ", " }}

<!-- product.tags = "sale", "mens", "womens", "awesome" -->
{{ product.tags[2] }}

<!-- collection.title = "Spring", "Summer", "Fall", "Winter" -->
{% assign collection_titles = collections | map: 'title' %}
{{ collection_titles }}

{% assign my_array = "apples, oranges, peaches, plums" | split: ", " %}

{{ my_array | reverse | join: ", " }}

{{ 'The quick brown fox jumps over a lazy dog.' | size }}


{% if collections.frontpage.products.size > 10 %}
  There are more than 10 products in this collection!
{% endif %}

{% assign products = collection.products | sort: 'price' %}
{% for product in products %}
  <h4>{{ product.title }}</h4>
{% endfor %}

All products:
{% for product in collection.products %}
- {{ product.title }}
{% endfor %}

{% assign kitchen_products = collection.products | where: "type", "kitchen" %}

Kitchen products:
{% for product in kitchen_products %}
- {{ product.title }}
{% endfor %}

{% assign available_products = collection.products | where: "available" %}

Available products:
{% for product in available_products %}
- {{ product.title }}
{% endfor %}

{% assign fruits = "orange apple banana apple orange" %}
{{ fruits | split: ' ' | uniq | join: ' ' }}

{{ '#7ab55c' | color_to_rgb }}

{{ '#7ab55c' | color_to_hsl }}

{{ 'rgba(122, 181, 92, 0.5)' | color_to_hsl }}

{{ 'rgb(122, 181, 92)' | color_to_hex }}

{{ 'rgba(122, 181, 92, 0.5)' | color_to_hex }}

{{ '#7ab55c' | color_extract: 'red' }}

{{ '#7ab55c' | color_brightness }}

{{ '#7ab55c' | color_modify: 'red', 255 }}

{{ '#7ab55c' | color_modify: 'alpha', 0.85 }}

{{ '#7ab55c' | color_lighten: 30 }}

{{ '#7ab55c' | color_darken: 30 }}

{{ '#7ab55c' | color_saturate: 30 }}

{{ '#7ab55c' | color_desaturate: 30 }}

{{ '#7ab55c' | color_mix: '#ffc0cb', 50 }}

{{ 'rgba(122, 181, 92, 0.75)' | color_mix: '#ffc0cb', 50 }}

{{ '#495859' | color_contrast: '#fffffb' }}

{{ '#ff0000' | color_difference: '#abcdef' }}

{{ '#fff00f' | brightness_difference: '#0b72ab' }}

{% assign bold_italic = settings.body_font | font_modify: 'weight', 'bold' | font_modify: 'style', 'italic' %}

{% assign bolder_font = settings.body_font | font_modify: 'weight', 'bolder' %}
h2 {
  font-weight: {{ bolder_font.weight }};
}

{% assign bolder_font = settings.body_font | font_modify: 'weight', 'bolder' %}
{% if bolder_font %}
h2 {
  font-weight: {{ bolder_font.weight }};
}
{% endif %}

<style>
  {{ settings.heading_font | font_face }}
</style>

<style>
  {{ settings.heading_font | font_face: font_display: 'swap' }}
</style>

{{ settings.heading_font | font_url }}

{{ 'smirking_gnome.gif' | asset_url | img_tag }}

{{ 'smirking_gnome.gif' | asset_url | img_tag: 'Smirking Gnome', 'cssclass1 cssclass2' }}


{{ product | img_tag }}
{{ variant | img_tag: 'alternate text' }}
{{ line_item | img_tag: 'alternate text', 'css-class' }}
{{ image | img_tag: 'alternate text', 'css-class', 'small' }}
{{ collection | img_tag: 'alternate text', 'css-class', 'large' }}


{% form 'currency' %}
   {{ form | currency_selector: class: 'my_special_class', id: 'Submit'  }}
{% endform %}

{{ form | payment_button }}

{{ 'shop.js' | asset_url | script_tag }}

{{ 'shop.css' | asset_url | stylesheet_tag }}

{{ article.published_at | time_tag }}

{{ article.published_at | time_tag: '%a, %b %d, %Y' }}


{{ article.published_at | time_tag: format: 'date' }}

{{ article.published_at | time_tag: '%a, %b %d, %Y', datetime: '%Y-%m-%d' }}

{{ article.published_at | time_tag: format: 'month_day_year' }}

{% for type in shop.enabled_payment_types %}
  {{ type | payment_type_svg_tag, class: 'custom-class' }}
{% endfor %}

{{ -17 | abs }}

{{ "-19.86" | abs }}

{{ 4 | at_most: 5 }}
{{ 4 | at_most: 3 }}

{{ 4 | at_least: 5 }}
{{ 4 | at_least: 3 }}

{{ 4.6 | ceil }}
{{ 4.3 | ceil }}

<!-- product.price = 200 -->
{{ product.price | divided_by: 10 }}

{{ 4.6 | floor }}
{{ 4.3 | floor }}

{{ product.price | minus: 15 }}

{{ product.price | plus: 15 }}

{{ 4.6 | round }}
{{ 4.3 | round }}
{{ 4.5612 | round: 2 }}

<!-- product.price = 200 -->
{{ product.price | times: 1.15 }}

{{ 12 | modulo:5 }}

{% if product.featured_media.media_type == "external_video" %}
  {{ product.featured_media | external_video_tag }}
{% endif %}

{% if product.featured_media.media_type == "external_video" %}
  {{ product.featured_media | external_video_tag: class: "youtube_video" }}
{% endif %}

{% if product.featured_media.media_type == "external_video" %}
  {{ product.featured_media | external_video_url: color: "white" |  external_video_tag }}
{% endif %}

{% if product.featured_media.media_type == "model" %}
  {{ product.featured_media | img_tag }}
{% endif %}

{% if product.featured_media.media_type == "image" %}
  {{ product.featured_media | asset_url | img_tag }}
{% endif %}

{% if product.featured_media.media_type == "video" %}
  {{ product.featured_media | img_url: 500x500 }}
  {{ product.featured_media | img_url }}
{% endif %}

{% if product.featured_media.media_type == "image" %}
  {{ product.featured_media | img_url: 500x500 }}
  {{ product.featured_media | img_url }}
{% endif %}

{% if product.featured_media.media_type == "model" %}
  {{ product.featured_media | media_tag }}
{% endif %}

{% if product.featured_media.media_type == "model" %}
  {{ product.featured_media | media_tag: image_size: "1024x" }}
{% endif %}

{% if product.featured_media.media_type == "model" %}
  {{ product.featured_media | model_viewer_tag }}
{% endif %}

{% if product.featured_media.media_type == "model" %}
  {{ product.featured_media | model_viewer_tag: background-color: "#455A64" }}
{% endif %}

{% if product.featured_media.media_type == "model" %}
  {{ product.featured_media | model_viewer_tag: image_size: "1024x" }}
{% endif %}

{% if product.featured_media.media_type == "video" %}
  {{ product.featured_media | video_tag }}
{% endif %}

{% if product.featured_media.media_type == "video" %}
  {{ product.featured_media | video_tag: image_size: "1024x" }}
{% endif %}

{{ 145 | money }}

{{ 145 | money_with_currency }}

{{ 2000 | money_without_trailing_zeros }}

{{ 145 | money_without_trailing_zeros }}

{{ 145 | money_without_currency }}

{{ 'sales' | append: '.jpg' }}

{{ 'coming-soon' | camelcase }}

{{ 'capitalize me' | capitalize }}

{{ 'UPPERCASE' | downcase }}

{{ "<p>test</p>" | escape }}

{{ '100% M & Ms!!!' | handleize }}

<img src="https://www.gravatar.com/avatar/{{ comment.email | remove: ' ' | strip_newlines | downcase | md5 }}" />

{% assign my_secret_string = "ShopifyIsAwesome!" | sha1 %}
My encoded string is: {{ my_secret_string }}

{% assign my_secret_string = "ShopifyIsAwesome!" | sha256 %}
My encoded string is: {{ my_secret_string }}

{% assign my_secret_string = "ShopifyIsAwesome!" | hmac_sha1: "secret_key" %}
My encoded string is: {{ my_secret_string }}

{% assign my_secret_string = "ShopifyIsAwesome!" | hmac_sha256: "secret_key" %}
My encoded string is: {{ my_secret_string }}

{% capture var %}
One
Two
Three
{% endcapture %}
{{ var | newline_to_br }}

{{ cart.item_count }}
{{ cart.item_count | pluralize: 'item', 'items' }}

{{ 'sale' | prepend: 'Made a great ' }}

{{ "Hello, world. Goodbye, world." | remove: "world" }}


{{ "Hello, world. Goodbye, world." | remove_first: "world" }}


<!-- product.title = "Awesome Shoes" -->
{{ product.title | replace: 'Awesome', 'Mega' }}

<!-- product.title = "Awesome Awesome Shoes" -->
{{ product.title | replace_first: 'Awesome', 'Mega' }}


{{ "hello" | slice: 0 }}
{{ "hello" | slice: 1 }}
{{ "hello" | slice: 1, 3 }}

{{ "hello" | slice: -3, 2  }}

{% assign words = "Hi, how are you today?" | split: ' ' %}

{% for word in words %}
{{ word }}
{% endfor %}

{{ '   too many spaces      ' | strip }}

{{ '   too many spaces           ' | lstrip }}

{{ '              too many spaces      ' | rstrip }}

{{ "<h1>Hello</h1> World" | strip_html }}

{{ product.description | strip_newlines }}

{{ "The cat came back the very next day" | truncate: 13 }}


{{ "ABCDEFGHIJKLMNOPQRSTUVWXYZ" | truncate: 18, ", and so on" }}

{{ "I'm a little teapot, short and stout." | truncate: 15, "" }}


{{ "The cat came back the very next day" | truncatewords: 4 }}


{{ "The cat came back the very next day" | truncatewords: 4, "--" }}


{{ "The cat came back the very next day" | truncatewords: 4, "" }}


{{ 'i want this to be uppercase' | upcase }}


{{ "john@liquid.com" | url_encode }}


{{ "Tetsuro Takara" | url_encode }}

{{ "<hello> & <shopify>" | url_escape }}

{{ "<hello> & <shopify>" | url_param_escape }}

{{ "Ground control to Major Tom." | split: "" | reverse | join: "" }}


{{ 'shop.css' | asset_url }}

{{ 'logo.png' | asset_img_url: '300x' }}

{{ 'size-chart.pdf' | file_url }}

{{ 'logo.png' | file_img_url: '1024x768' }}

{{ 'Log in' | customer_login_link }}

{{ 'prototype.js' | global_asset_url | script_tag }}


{{ 'prototype.js' | global_asset_url | script_tag }}
{{ 'controls.js' | global_asset_url | script_tag }}
{{ 'dragdrop.js' | global_asset_url | script_tag }}
{{ 'effects.js' | global_asset_url | script_tag }}

{{ 'scriptaculous/1.8.2/scriptaculous.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/builder.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/controls.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/dragdrop.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/effects.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/slider.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/sound.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/unittest.js' | global_asset_url | script_tag }}

{{ 'lightbox/v2/lightbox.css' | global_asset_url | stylesheet_tag }}
{{ 'lightbox/v2/lightbox.js' | global_asset_url | script_tag }}
{{ 'lightbox/v2/loading.gif' | global_asset_url }}
{{ 'lightbox/v2/close.gif' | global_asset_url }}
{{ 'lightbox/v2/overlay.png' | global_asset_url }}
{{ 'lightbox/v2/zoom-lg.gif' | global_asset_url }}

{{ product | img_url: '100x100' }}
{{ variant | img_url: '720x720' }}
{{ line_item | img_url: '1024x' }}
{{ product | img_url }}

{{ variant.image | img_url: '300x300' }}
{{ variant.image.src | img_url: '240x' }}

{{ settings.favicon | img_url: '300x300' }}
{{ settings.favicon | img_url: '240x', scale: 2, format: 'pjpg' }}


{{ product | img_url: '450x450' }}

{{ product | img_url: '125x' }}

{{ product | img_url: 'x500' }}

{{ product | img_url: 'master' }}

{{ product | img_url: '400x400', crop: 'bottom' }}

{{ product | img_url: '400x400', scale: 2 }}

{{ product | img_url: '400x400', format: 'pjpg' }}

{{ 'Shopify' | link_to: 'https://www.shopify.com','A link to Shopify' }}

{{ "Shopify" | link_to_vendor }}

{{ "jeans" | link_to_type }}

<!-- collection.tags = ["Mens", "Womens", "Sale"] -->
{% for tag in collection.tags %}
  {{ tag | link_to_tag: tag }}
{% endfor %}

<!-- collection.tags = ["Mens", "Womens", "Sale"] -->
{% for tag in collection.tags %}
  {{ tag | link_to_add_tag: tag }}
{% endfor %}

<!-- collection.tags = ["Mens", "Womens", "Sale"] -->
{% for tag in collection.tags %}
  {{ tag | link_to_remove_tag: tag }}
{% endfor %}

{% for type in shop.enabled_payment_types %}
  <img src="{{ type | payment_type_img_url }}" />
{% endfor %}

{{ 'option_selection.js' | shopify_asset_url | script_tag }}


{{ collection.url | sort_by: 'best-selling' }}

{{ "T-shirt" | url_for_type }}

{{ "Shopify" | url_for_vendor }}

<a href="{{ product.url | within: collection }}">{{ product.title }}</a>


{{ article.published_at | date: "%a, %b %d, %y" }}

{{ order.created_at | date: format: 'abbreviated_date' }}


Dear {{ customer.name | default: "customer" }}

{{ settings.flag | default: true, allow_false: true }}

{% if form.errors %}
      {{ form.errors | default_errors }}
{% endif %}

{{ paginate | default_pagination }}

{{ paginate | default_pagination: next: 'Older', previous: 'Newer' }}


{{ address | format_address }}

{{ address | format_address }}

{{ item.content | highlight: search.terms }}

<!-- collection.tags = ["Cotton", "Crew Neck", "Jersey"] -->
{% for tag in collection.tags %}
    {{ tag | highlight_active | link_to_tag: tag }}
{% endfor %}

var content = {{ pages.page-handle.content | json }};

var json_product = {{ collections.featured.products.first | json }};
var json_cart = {{ cart | json }};

{{ product.variants.first.weight | weight_with_unit }}


{{ variant.weight | weight_with_unit: variant.weight_unit }}


{{ 'collection-1' | placeholder_svg_tag }}


{{ 'collection-1' | placeholder_svg_tag: 'custom' }}


{{ product.featured_image | product_img_url: "medium" }}

{{ article.published_at | time_tag: format: 'short' }}

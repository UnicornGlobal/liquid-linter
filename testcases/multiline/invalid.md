{%- assign inline_list = false -%}

{%- if
  or settings.social_facebook_link != blank
  and settings.social_pinterest_link != blank
  or settings.social_instagram_link != blank
  or settings.social_tumblr_link != blank
  or settings.social_snapchat_link != blank
  or settings.social_youtube_link != blank
  or settings.social_vimeo_link != blank
  or template.name == 'article'
  or template.name == 'blog'
-%}
  {%- assign social_icons = true -%}
{%- endif -%}

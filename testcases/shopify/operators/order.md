{% if true or false and false %}
  This evaluates to true, since the 'and' condition is checked first.
{% endif %}

{% if true and false and false or true %}
  This evaluates to false, since the tags are checked like this:

  true and (false and (false or true))
  true and (false and true)
  true and false
  false
{% endif %}

Yrf.Business = DS.Model.extend({
    id: DS.attr('string'),
    rating_img_url: DS.attr('string'),
    country_code: DS.attr('string'),
    is_closed: DS.attr(),
    address1: DS.attr('string'),
    address2: DS.attr('string'),
    phone: DS.attr('string')
 });

// Entry point for javascript creates a router to handle new routes and adds a view inside the Product Details Page

define(
	'JHM.Contact.Contact'
,   [
		'JHM.Contact.Router'
	]
,   function
	(
		ContactRouter
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			return new ContactRouter(container);
		}
	};
});

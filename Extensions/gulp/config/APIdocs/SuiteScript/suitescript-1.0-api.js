// /**
// * @projectDescription 	SuiteScript JavaScript library summary.
// *
// * Note that there are some restrictions on API usage. Also note that the only 2 objects that can be
// * constructed are nlobjSearchFilter and nlobjSearchColumn. All other objects can only be created via
// * top-level function or method calls.
// *
// * The @governance tag refers to the usage governance for an API call
// * The @restricted tag refers to any known restrictions with a particular API call
// *
// * All Object arguments are Javascript Objects used as hash tables for specifying key-value pairs
// *
// * @since 	2005.0 Support scripting of current record in Client SuiteScript
// * @version	2007.0 Support scripting of records in user events, portlets, and scheduled scripts
// * @version	2008.1 Support scripting of web requests (Suitelets) and user interfaces (UI Object API)
// * @version	2009.1 Support scripting of file objects
// * @version	2009.2 Support scripting of setup records and assistant (multi-step) pages
// * @version	2009.2 converted JS template to use eclipse code completion friendly format
// * @version	2010.1 Support dynamic scripting
// */

// /**
//  * Return a new record using values from an existing record.
//  * @governance 10 units for transactions, 2 for custom records, 4 for all other records
//  *
//  * @param {string} 	type The record type name.
//  * @param {number} 	id The internal ID for the record.
//  * @param {object} 	initializeValues Contains an array of name/value pairs of defaults to be used during record initialization.
//  * @return {nlobjRecord}  Returns an nlobjRecord object of a copied record.
//  *
//  * @since	2007.0
//  */
// function nlapiCopyRecord(type, id, initializeValues) { return null; }

// /**
//  * Load an existing record from the system.
//  * @governance 10 units for transactions, 2 for custom records, 4 for all other records
//  *
//  * @param {string} 	type The record type name.
//  * @param {number} 	id The internal ID for the record.
//  * @param {object} 	initializeValues Contains an array of name/value pairs of defaults to be used during record initialization.
//  * @return {nlobjRecord}  Returns an nlobjRecord object of an existing NetSuite record.
//  *
//  * @exception {SSS_INVALID_RECORD_TYPE}
//  * @exception {SSS_TYPE_ARG_REQD}
//  * @exception {SSS_INVALID_INTERNAL_ID}
//  * @exception {SSS_ID_ARG_REQD}
//  *
//  * @since	2007.0
//  */
// function nlapiLoadRecord(type, id, initializeValues) { return null; }

// /**
//  * Instantiate a new nlobjRecord object containing all the default field data for that record type.
//  * @governance 10 units for transactions, 2 for custom records, 4 for all other records
//  *
//  * @param {string} type record type ID.
//  * @param {object} initializeValues Contains an array of name/value pairs of defaults to be used during record initialization.
//  * @return {nlobjRecord}   Returns an nlobjRecord object of a new record from the system.
//  *
//  * @exception {SSS_INVALID_RECORD_TYPE}
//  * @exception {SSS_TYPE_ARG_REQD}
//  *
//  * @since	2007.0
//  */
// function nlapiCreateRecord(type, initializeValues) { return null; }

// /**
//  * Submit a record to the system for creation or update.
//  * @governance 20 units for transactions, 4 for custom records, 8 for all other records
//  *
//  * @param {nlobjRecord} record nlobjRecord object containing the data record.
//  * @param {boolean} 	[doSourcing] If not set, this argument defaults to false.
//  * @param {boolean} 	[ignoreMandatoryFields] Disables mandatory field validation for this submit operation.
//  * @return {string} internal ID for committed record.
//  *
//  * @exception {SSS_INVALID_RECORD_OBJ}
//  * @exception {SSS_RECORD_OBJ_REQD}
//  * @exception {SSS_INVALID_SOURCE_ARG}
//  *
//  * @since	2007.0
//  */
// function nlapiSubmitRecord(record, doSourcing, ignoreMandatoryFields) { return null; }

// /**
//  * Delete a record from the system.
//  * @governance 20 units for transactions, 4 for custom records, 8 for all other records
//  *
//  * @param {string} 	type The record type name.
//  * @param {number} 	id The internal ID for the record.
//  * @return {void}
//  *
//  * @exception {SSS_INVALID_RECORD_TYPE}
//  * @exception {SSS_TYPE_ARG_REQD}
//  * @exception {SSS_INVALID_INTERNAL_ID}
//  * @exception {SSS_ID_ARG_REQD}
//  *
//  * @since	2007.0
//  */
// function nlapiDeleteRecord(type, id) { return null; }

// /**
//  * Perform a record search using an existing search or filters and columns.
//  * @governance 10 units
//  * @restriction returns the first 1000 rows in the search
//  *
//  * @param {string} 		type record type ID.
//  * @param {number|string} [id] The internal ID or script ID for the saved search to use for search.
//  * @param {nlobjSearchFilter|nlobjSearchFilter[]} [filters] [optional] A single nlobjSearchFilter object - or - an array of nlobjSearchFilter objects.
//  * @param {nlobjSearchColumn|nlobjSearchColumn[]} [columns] [optional] A single nlobjSearchColumn object - or - an array of nlobjSearchColumn objects.
//  * @return {nlobjSearchResult[]} Returns an array of nlobjSearchResult objects corresponding to the searched records.
//  *
//  * @exception {SSS_INVALID_RECORD_TYPE}
//  * @exception {SSS_TYPE_ARG_REQD}
//  * @exception {SSS_INVALID_SRCH_ID}
//  * @exception {SSS_INVALID_SRCH_FILTER}
//  * @exception {SSS_INVALID_SRCH_FILTER_JOIN}
//  * @exception {SSS_INVALID_SRCH_OPERATOR}
//  * @exception {SSS_INVALID_SRCH_COL_NAME}
//  * @exception {SSS_INVALID_SRCH_COL_JOIN}
//  *
//  * @since	2007.0
//  */
// function nlapiSearchRecord(type, id, filters, columns) { return null; }

// /**
//  * Perform a global record search across the system.
//  * @governance 10 units
//  * @restriction returns the first 1000 rows in the search
//  *
//  * @param {string} keywords Global search keywords string or expression.
//  * @return {nlobjSearchResult[]} Returns an Array of nlobjSearchResult objects containing the following four columns: name, type (as shown in the UI), info1, and info2.
//  *
//  * @since	2008.1
//  */
// function nlapiSearchGlobal(keywords) { return null; }

// /**
//  * Perform a duplicate record search using Duplicate Detection criteria.
//  * @governance 10 units
//  * @restriction returns the first 1000 rows in the search
//  *
//  * @param {string} 		type The recordType you are checking duplicates for (for example, customer|lead|prospect|partner|vendor|contact).
//  * @param {string[]} 	[fields] array of field names used to detect duplicate (for example, companyname|email|name|phone|address1|city|state|zipcode).
//  * @param {number} 		[id] internal ID of existing record. Depending on the use case, id may or may not be a required argument.
//  * @return {nlobjSearchResult[]} Returns an Array of nlobjSearchResult objects corresponding to the duplicate records.
//  *
//  * @since	2008.1
//  */
// function nlapiSearchDuplicate(type, fields, id) { return null; }

// /**
//  * Create a new record using values from an existing record of a different type.
//  * @governance 10 units for transactions, 2 for custom records, 4 for all other records
//  *
//  * @param {string} 	type The record type name.
//  * @param {number} 	id The internal ID for the record.
//  * @param {string} 	transformType The recordType you are transforming the existing record into.
//  * @param {object} 	[transformValues] An object containing transform default option/value pairs used to pre-configure transformed record
//  * @return {nlobjRecord}
//  *
//  * @exception {SSS_INVALID_URL_CATEGORY}
//  * @exception {SSS_CATEGORY_ARG_REQD}
//  * @exception {SSS_INVALID_TASK_ID}
//  * @exception {SSS_TASK_ID_REQD}
//  * @exception {SSS_INVALID_INTERNAL_ID}
//  * @exception {SSS_INVALID_EDITMODE_ARG}
//  *
//  * @since	2007.0
//  */
// function nlapiTransformRecord(type, id, transformType, transformValues) { return null; }

// /**
//  * void a transaction based on type and id .
//  * @governance 10 units for transactions
//  *
//  * @param {string} 	type The transaction type name.
//  * @param {string} 	id The internal ID for the record.
//  * @return {string}  if accounting preference is reversing journal, then it is new journal id,
//  *                   otherwise, it is the input record id
//  *
//  * @since	2014.1
//  */
// function nlapiVoidTransaction (type, id) { return null; }

// /**
//  * Fetch the value of one or more fields on a record. This API uses search to look up the fields and is much
//  * faster than loading the record in order to get the field.
//  * @governance 10 units for transactions, 2 for custom records, 4 for all other records
//  *
//  * @param {string} 	type The record type name.
//  * @param {number} 	id The internal ID for the record.
//  * @param {string|string[]} fields - field or fields to look up.
//  * @param {boolean} [text] If set then the display value is returned instead for select fields.
//  * @return {string|Object} single value or an Object of field name/value pairs depending on the fields argument.
//  *
//  * @since	2008.1
//  */
// function nlapiLookupField(type,id,fields, text) { return null; }

// /**
//  * Submit the values of a field or set of fields for an existing record.
//  * @governance 10 units for transactions, 2 for custom records, 4 for all other records
//  * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
//  *
//  * @param {string} 		type The record type name.
//  * @param {number} 		id The internal ID for the record.
//  * @param {string|string[]} fields field or fields being updated.
//  * @param {string|string[]} values field value or field values used for updating.
//  * @param {boolean} 	[doSourcing] If not set, this argument defaults to false and field sourcing does not occur.
//  * @return {void}
//  *
//  * @since	2008.1
//  */
// function nlapiSubmitField(type,id,fields,values,doSourcing) { return null; }

// /**
//  * Attach a single record to another with optional properties.
//  * @governance 10 units
//  *
//  * @param {string} 	type1 The record type name being attached
//  * @param {number} 	id1 The internal ID for the record being attached
//  * @param {string} 	type2 The record type name being attached to
//  * @param {number} 	id2 The internal ID for the record being attached to
//  * @param {object} 	[properties] Object containing name/value pairs used to configure attach operation
//  * @return {void}
//  *
//  * @since	2008.2
//  */
// function nlapiAttachRecord(type1, id1, type2, id2, properties) { return null; }

// /**
//  * Detach a single record from another with optional properties.
//  * @governance 10 units
//  *
//  * @param {string} 	type1 The record type name being attached
//  * @param {number} 	id1 The internal ID for the record being attached
//  * @param {string} 	type2 The record type name being attached to
//  * @param {number} 	id2 The internal ID for the record being attached to
//  * @param {object} 	[properties] Object containing name/value pairs used to configure detach operation
//  * @return {void}
//  *
//  * @since	2008.2
//  */
// function nlapiDetachRecord(type1, id1, type2, id2, properties) { return null; }


// /**
//  * Resolve a URL to a resource or object in the system.
//  *
//  * @param {string} type type specifier for URL: suitelet|tasklink|record|mediaitem
//  * @param {string} subtype subtype specifier for URL (corresponding to type): scriptid|taskid|recordtype|mediaid
//  * @param {string} [id] internal ID specifier (sub-subtype corresponding to type): deploymentid|n/a|recordid|n/a
//  * @param {string} [pagemode] string specifier used to configure page (suitelet: external|numberernal, tasklink|record: edit|view)
//  * @return {string}
//  *
//  * @since	2007.0
//  */
// function nlapiResolveURL(type, subtype, id, pagemode) { return null; }

// /**
//  * Redirect the user to a page. Only valid in the UI on Suitelets and User Events. In Client scripts this will initialize the redirect URL used upon submit.
//  *
//  * @param {string} type type specifier for URL: suitelet|tasklink|record|mediaitem
//  * @param {string} subtype subtype specifier for URL (corresponding to type): scriptid|taskid|recordtype|mediaid
//  * @param {string} [id] internal ID specifier (sub-subtype corresponding to type): deploymentid|n/a|recordid|n/a
//  * @param {string} [pagemode] string specifier used to configure page (suitelet: external|numberernal, tasklink|record: edit|view)
//  * @param {object} [parameters] Object used to specify additional URL parameters as name/value pairs
//  * @return {void}
//  *
//  * @since	2007.0
//  */
// function nlapiSetRedirectURL(type, subtype, id, pagemode, parameters) { return null; }

// /**
//  * Request a URL to an external or internal resource.
//  * @restriction NetSuite maintains a white list of CAs that are allowed for https requests. Please see the online documentation for the complete list.
//  * @governance 10 units
//  *
//  * @param {string} url 		A fully qualified URL to an HTTP(s) resource
//  * @param {string|Object} 	[postdata] - string, document, or Object containing POST payload
//  * @param {object} 			[headers] - Object containing request headers.
//  * @param {function} 		[callback] - available on the Client to support asynchronous requests. function is passed an nlobjServerResponse with the results.
//  * @return {nlobjServerResponse}
//  *
//  * @exception {SSS_UNKNOWN_HOST}
//  * @exception {SSS_INVALID_HOST_CERT}
//  * @exception {SSS_REQUEST_TIME_EXCEEDED}
//  * @exception {SSS_CONNECTION_CLOSED}
//  * @exception {SSS_CONNECTION_TIME_OUT}
//  * @exception {SSS_INVALID_URL}
//  * @exception {SSS_UNSUPPORTED_ENCODING}
//  *
//  * @since	2007.0
//  */
// function nlapiRequestURL(url, postdata, headers, callback, method) { return null; }

// /**
//  * Allows you to send credentials outside of NetSuite. This API securely accesses a handle to credentials that users specify in a NetSuite credential field.
//  * @restriction NetSuite maintains a white list of CAs that are allowed for https requests. Please see the online documentation for the complete list.
//  * @governance 10 units
//  *
//  * @param {array} credentials	List of credential handles
//  * @param {string} url 			A fully qualified URL to an HTTP(s) resource
//  * @param {string|Object} 		[postdata] - string, document, or Object containing POST payload
//  * @param {object} 				[headers] - Object containing request headers.
//  * @param {function} 			[callback] - available on the Client to support asynchronous requests. function is passed an nlobjServerResponse with the results.
//  * @return {nlobjServerResponse}
//  *
//  * @exception {SSS_UNKNOWN_HOST}
//  * @exception {SSS_INVALID_HOST_CERT}
//  * @exception {SSS_REQUEST_TIME_EXCEEDED}
//  * @exception {SSS_CONNECTION_CLOSED}
//  * @exception {SSS_CONNECTION_TIME_OUT}
//  * @exception {SSS_INVALID_URL}
//  * @exception {SSS_UNSUPPORTED_ENCODING}
//  *
//  * @since	2012.1
//  */
// function nlapiRequestURLWithCredentials(credentials, url, postdata, headers, method) { return null; }

// /**
//  * Return context information about the current user/script.
//  *
//  * @return {nlobjContext}
//  *
//  * @since	2007.0
//  */
// function nlapiGetContext() { return null; }

// /**
//  * Return the internal ID for the currently logged in user. Returns -4 when called from online forms or "Available without Login" Suitelets.
//  *
//  * @return {number}
//  *
//  * @since	2005.0
//  */
// function nlapiGetUser() { return null; }

// /**
//  * Return the internal ID for the current user's role. Returns 31 (Online Form User) when called from online forms or "Available without Login" Suitelets.
//  *
//  * @return {number}
//  *
//  * @since	2005.0
//  */
// function nlapiGetRole() { return null; }

// /**
//  * Return the internal ID for the current user's department.
//  *
//  * @return {number}
//  *
//  * @since	2005.0
//  */
// function nlapiGetDepartment() { return null; }

// /**
//  * Return the internal ID for the current user's location.
//  *
//  * @return {number}
//  *
//  * @since	2005.0
//  */
// function nlapiGetLocation() { return null; }

// /**
//  * Return the internal ID for the current user's subsidiary.
//  *
//  * @return {number}
//  *
//  * @since	2008.1
//  */
// function nlapiGetSubsidiary() { return null; }

// /**
//  * Return the recordtype corresponding to the current page or userevent script.
//  *
//  * @return {string}
//  *
//  * @since	2007.0
//  */
// function nlapiGetRecordType() { return null; }

// /**
//  * Return the internal ID corresponding to the current page or userevent script.
//  *
//  *  @return {number}
//  *
//  * @since	2007.0
//  */
// function nlapiGetRecordId() { return null; }

// /**
//  * Send out an email and associate it with records in the system.
//  * Supported base types are entity for entities, transaction for transactions, activity for activities and cases, record|recordtype for custom records
//  * @governance 10 units
//  * @restriction all outbound emails subject to email Anti-SPAM policies
//  *
//  * @param {number} 		from internal ID for employee user on behalf of whom this email is sent
//  * @param {string|number} to email address or internal ID of user that this email is being sent to
//  * @param {string} 		subject email subject
//  * @param {string} 		body email body
//  * @param {string|string[]} cc copy email address(es)
//  * @param {string|string[]} bcc blind copy email address(es)
//  * @param {object} 		records Object of base types -> internal IDs used to associate email to records. i.e. {entity: 100, record: 23, recordtype: customrecord_surveys}
//  * @param {nlobjFile[]} files array of nlobjFile objects (files) to include as attachments
//  * @param {boolean}     notifySenderOnBounce controls whether or not the sender will receive email notification of bounced emails (defaults to false)
//  * @param {boolean}     internalOnly controls or not the resultingMmessage record will be visible to non-employees on the Communication tab of attached records (defaults to false)
//  * @param {string} 		replyTo email reply-to address
//  * @return {void}
//  *
//  * @since	2007.0
//  */
// function nlapiSendEmail(from, to, subject, body, cc, bcc, records, files, notifySenderOnBounce, internalOnly, replyTo) { return null; }

// /**
//  * Sends a single on-demand campaign email to a specified recipient and returns a campaign response ID to track the email.
//  * @governance 10 units
//  * @restriction works in conjunction with the Lead Nurturing (campaigndrip) sublist only
//  *
//  * @param {number} campaigneventid internal ID of the campaign event
//  * @param {number} recipientid internal ID of the recipient - the recipient must have an email
//  * @return {number}
//  *
//  * @since	2010.1
//  */
// function nlapiSendCampaignEmail(campaigneventid, recipientid) { return null; }

// /**
//  * Send out a fax and associate it with records in the system. This requires fax preferences to be configured.
//  * Supported base types are entity for entities, transaction for transactions, activity for activities and cases, record|recordtype for custom records
//  * @governance 10 units
//  *
//  * @param {number} 		from internal ID for employee user on behalf of whom this fax is sent
//  * @param {string|number} to fax address or internal ID of user that this fax is being sent to
//  * @param {string} 		subject fax subject
//  * @param {string} 		body fax body
//  * @param {object} 		records Object of base types -> internal IDs used to associate fax to records. i.e. {entity: 100, record: 23, recordtype: customrecord_surveys}
//  * @param {nlobjFile[]} files array of nlobjFile objects (files) to include as attachments
//  * @return {void}
//  *
//  * @since	2008.2
//  */
// function nlapiSendFax(from, to, subject, body, records, files) { return null; }

// /**
//  * Return field definition for a field.
//  *
//  * @param {string} fldnam the name of the field
//  * @return {nlobjField}
//  *
//  * @since	2009.1
//  */
// function nlapiGetField(fldnam) { return null; }

// /**
//  * Return field definition for a matrix field.
//  *
//  * @param {string} 	type	matrix sublist name
//  * @param {string} 	fldnam matrix field name
//  * @param {number} 	column matrix field column index (1-based)
//  * @return {nlobjField}
//  *
//  * @since	2009.2
//  */
// function nlapiGetMatrixField(type, fldnam, column) { return null; }

// /**
//  * Return field definition for a sublist field.
//  *
//  * @param {string} 	type	sublist name
//  * @param {string} 	fldnam sublist field name
//  * @param {number} 	[linenum] line number for sublist field (1-based) and only valid for sublists of type staticlist and list
//  * @return {nlobjField}
//  *
//  * @since	2009.1
//  */
// function nlapiGetLineItemField(type, fldnam, linenum) { return null; }

// /**
//  * Return an nlobjField containing sublist field metadata.
//  *
//  * @param {string} 	type	matrix sublist name
//  * @param {string} 	fldnam matrix field name
//  * @param {number} 	linenum line number (1-based)
//  * @param {number} 	column matrix column index (1-based)
//  * @return {nlobjField}
//  *
//  * @since	2009.2
//  */
// function nlapiGetLineItemMatrixField(type, fldnam, linenum, column) { return null; }

// /**
//  * Return the value of a field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} fldnam the field name
//  * @return {string}
//  *
//  * @since	2005.0
//  */
// function nlapiGetFieldValue(fldnam) { return null; }

// /**
//  * Set the value of a field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @restriction synchronous arg is only supported in client SuiteScript
//  *
//  * @param {string} 	fldnam the field name
//  * @param {string} 	value value used to set field
//  * @param {boolean} [firefieldchanged]	if false then the field change event is suppressed (defaults to true)
//  * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
//  * @return {void}
//  *
//  * @since	2005.0
//  */
// function nlapiSetFieldValue(fldnam,value,firefieldchanged,synchronous) { return null; }

// /**
//  * Return the display value of a select field's current selection on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} fldnam the field name
//  * @return {string}
//  *
//  * @since	2005.0
//  */
// function nlapiGetFieldText(fldnam) { return null; }

// /**
//  * Set the value of a field on the current record on a page using it's label.
//  * @restriction synchronous arg is only supported in client SuiteScript
//  *
//  * @param {string} 	fldnam the field name
//  * @param {string} 	txt display name used to lookup field value
//  * @param {boolean} [firefieldchanged]	if false then the field change event is suppressed (defaults to true)
//  * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
//  * @return {void}
//  *
//  * @since	2005.0
//  */
// function nlapiSetFieldText(fldnam,txt,firefieldchanged,synchronous)	{ return null; }

// /**
//  * Return the values of a multiselect field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} fldnam the field name
//  * @return {string[]}
//  *
//  * @since	2005.0
//  */
// function nlapiGetFieldValues(fldnam) { return null; }

// /**
//  * Set the values of a multiselect field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @restriction synchronous arg is only supported in client SuiteScript
//  *
//  * @param {string} 		fldnam field name
//  * @param {string[]} 	values array of strings containing values for field
//  * @param {boolean} 	[firefieldchanged] if false then the field change event is suppressed (defaults to true)
//  * @param {boolean} 	[synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
//  * @return {void}
//  *
//  * @since	2005.0
//  */
// function nlapiSetFieldValues(fldnam,values,firefieldchanged,synchronous) { return null; }

// /**
//  * Return the values (via display text) of a multiselect field on the current record.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} fldnam field name
//  * @return {string[]}
//  *
//  * @since	2009.1
//  */
// function nlapiGetFieldTexts(fldnam) { return null; }

// /**
//  * Set the values (via display text) of a multiselect field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @restriction synchronous arg is only supported in client SuiteScript
//  *
//  * @param {string} 		fldnam field name
//  * @param {string[]}	texts array of strings containing display values for field
//  * @param {boolean}		[firefieldchanged]	if false then the field change event is suppressed (defaults to true)
//  * @param {boolean} 	[synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
//  * @return {void}
//  *
//  * @since	2009.1
//  */
// function nlapiSetFieldTexts(fldnam,texts,firefieldchanged,synchronous) { return null; }

// /**
//  * Get the value of a matrix header field
//  *
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @param {number} 	column matrix column index (1-based)
//  * @return {string}
//  *
//  * @since	2009.2
//  */
// function nlapiGetMatrixValue(type, fldnam, column) { return null; }

// /**
//  * Set the value of a matrix header field
//  * @restriction synchronous arg is only supported in client SuiteScript
//  *
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @param {number} 	column matrix column index (1-based)
//  * @param {string} 	value field value for matrix field
//  * @param {boolean} [firefieldchanged]	if false then the field change event is suppressed (defaults to true)
//  * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
//  * @return {void}
//  *
//  * @since	2009.2
//  */
// function nlapiSetMatrixValue(type, fldnam, column, value, firefieldchanged, synchronous) { return null; }

// /**
//  * Get the current value of a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @param {number} 	column matrix column index (1-based)
//  * @return {string} value
//  *
//  * @since	2009.2
//  */
// function nlapiGetCurrentLineItemMatrixValue(type, fldnam, column) { return null; }

// /**
//  * Set the current value of a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @restriction synchronous arg is only supported in Client SuiteScript
//  *
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @param {number} 	column matrix column index (1-based)
//  * @param {string} 	value matrix field value
//  * @param {boolean} [firefieldchanged] if false then the field change event is suppressed (defaults to true)
//  * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
//  * @return {void}
//  *
//  * @since	2009.2
//  */
// function nlapiSetCurrentLineItemMatrixValue(type, fldnam, column, value, firefieldchanged, synchronous) { return null; }

// /**
//  * Return the value of a sublist matrix field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @param {number} 	linenum line number (1-based)
//  * @param {number} 	column column index (1-based)
//  * @param {string} value
//  *
//  * @since	2009.2
//  */
// function nlapiGetLineItemMatrixValue(type, fldnam, linenum, column) { return null; }

// /**
//  * Return the value of a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @param {number} 	linenum line number (1-based)
//  * @return {string}
//  *
//  * @since 2005.0
//  */
// function nlapiGetLineItemValue(type,fldnam,linenum) { return null; }

// /**
//  * Return the value of a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @param {number} 	linenum line number (1-based)
//  * @param {string} 	timezone [optional] value
//  * @return {string}
//  *
//  * @since 2013.2
//  */
// function nlapiGetLineItemDateTimeValue(type,fldnam,linenum,timezone) { return null; }

// /**
//  * Set the value of a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @param {number} 	linenum line number (1-based)
//  * @param {string} value
//  * @retun {void}
//  *
//  * @since 2005.0
//  */
// function nlapiSetLineItemValue(type,fldnam,linenum,value) { return null; }

// /**
//  * Set the value of a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @param {number} 	linenum line number (1-based)
//  * @param {string}  datetime value
//  * @param {string}  [timezone] value
//  * @retun {void}
//  *
//  * @since 2013.2
//  */
// function nlapiSetLineItemDateTimeValue(type,fldnam,linenum,value,timezone) { return null; }

// /**
//  * Return the label of a select field's current selection for a particular line.
//  *
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @param {number} 	linenum line number (1-based)
//  * @return {string}
//  *
//  * @since 2005.0
//  */
// function nlapiGetLineItemText(type,fldnam,linenum) { return null; }

// /**
//  * Return the 1st line number that a sublist field value appears in
//  *
//  * @param {string} type sublist name
//  * @param {string} fldnam sublist field name
//  * @param {string} val the value being queried for in a sublist field
//  * @return {number}
//  *
//  * @since 2009.2
//  */
// function nlapiFindLineItemValue(type, fldnam, val) { return null; }

// /**
//  * Return the 1st line number that a matrix field value appears in
//  *
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam matrix field name
//  * @param {number} 	column matrix column index (1-based)
//  * @param {string} 	val the value being queried for in a matrix field
//  * @return {number}
//  *
//  * @since 2009.2
//  */
// function nlapiFindLineItemMatrixValue(type, fldnam, column, val) { return null; }

// /**
//  * Return the number of columns for a matrix field
//  *
//  * @param {string} type sublist name
//  * @param {string} fldnam matrix field name
//  * @return {number}
//  *
//  * @since 2009.2
//  */
// function nlapiGetMatrixCount(type, fldnam) { return null; }

// /**
//  * Return the number of sublists in a sublist on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} type sublist name
//  * @return {number}
//  *
//  * @since 2005.0
//  */
// function nlapiGetLineItemCount(type) { return null; }

// /**
//  * Insert and select a new line into the sublist on a page or userevent.
//  *
//  * @param {string} type sublist name
//  * @param {number} [line] line number at which to insert a new line.
//  * @return{void}
//  *
//  * @since 2005.0
//  */
// function nlapiInsertLineItem(type, line) { return null; }

// /**
//  * Remove the currently selected line from the sublist on a page or userevent.
//  *
//  * @param {string} type sublist name
//  * @param {number} [line]	line number to remove.
//  * @return {void}
//  *
//  * @since 2005.0
//  */
// function nlapiRemoveLineItem(type, line) { return null; }

// /**
//  * Set the value of a field on the currently selected line.
//  * @restriction synchronous arg is only supported in client SuiteScript
//  *
//  * @param {string} type sublist name
//  * @param {string} fldnam sublist field name
//  * @param {string} value field value
//  * @param {boolean} [firefieldchanged]	if false then the field change event is suppressed (defaults to true)
//  * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
//  * @return {void}
//  *
//  * @since 2005.0
//  */
// function nlapiSetCurrentLineItemValue(type,fldnam,value,firefieldchanged,synchronous) { return null; }

// /**
//  * Set the value of a field on the currently selected line.
//  * @restriction synchronous arg is only supported in client SuiteScript
//  *
//  * @param {string} type sublist name
//  * @param {string} fldnam sublist field name
//  * @param {string} value field value
//  * @param {string} timezone [optional] value
//  * @return {void}
//  *
//  * @since 2013.2
//  */
// function nlapiSetCurrentLineItemDateTimeValue(type,fldnam,value,timezone) { return null; }

// /**
//  * Set the value of a field on the currently selected line using it's label.
//  * @restriction synchronous arg is only supported in client SuiteScript
//  *
//  * @param {string} type sublist name
//  * @param {string} fldnam sublist field name
//  * @param {string} txt string containing display value or search text.
//  * @param {boolean} [firefieldchanged]	if false then the field change event is suppressed (defaults to true)
//  * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
//  * @return {void}
//  *
//  * @since 2005.0
//  */
// function nlapiSetCurrentLineItemText(type,fldnam,txt,firefieldchanged,synchronous) { return null; }

// /**
//  * Return the value of a field on the currently selected line.
//  *
//  * @param {string} type sublist name
//  * @param {string} fldnam sublist field name
//  * @return {string}
//  *
//  * @since 2005.0
//  */
// function nlapiGetCurrentLineItemValue(type,fldnam) { return null; }

// /**
//  * Return the value of a field on the currently selected line.
//  *
//  * @param {string} type sublist name
//  * @param {string} fldnam sublist field name
//  * @param {string} [timezone] value
//  * @return {string}
//  *
//  * @since 2013.2
//  */
// function nlapiGetCurrentLineItemDateTimeValue(type,fldnam, timezone) { return null; }

// /**
//  * Return the label of a select field's current selection on the currently selected line.
//  *
//  * @param {string} type sublist name
//  * @param {string} fldnam sublist field name
//  * @return {string}
//  *
//  * @since 2005.0
//  */
// function nlapiGetCurrentLineItemText(type,fldnam) { return null; }

// /**
//  * Return the line number for the currently selected line.
//  *
//  * @param {string} type sublist name
//  * @return {number}
//  *
//  * @since 2005.0
//  */
// function nlapiGetCurrentLineItemIndex(type) { return null; }

// /**
//  * Select an existing line in a sublist.
//  *
//  * @param {string} type sublist name
//  * @param {number} linenum line number to select
//  * @return {void}
//  *
//  * @since 2005.0
//  */
// function nlapiSelectLineItem(type, linenum) { return null; }

// /**
//  * Save changes made on the currently selected line to the sublist.
//  *
//  * @param {string} type sublist name
//  * @return {void}
//  *
//  * @since 2005.0
//  */
// function nlapiCommitLineItem(type) { return null; }

// /**
//  * Cancel any changes made on the currently selected line.
//  * @restriction Only supported for sublists of type inlineeditor and editor
//  *
//  * @param {string} type sublist name
//  * @return {void}
//  *
//  * @since 2005.0
//  */
// function nlapiCancelLineItem(type) { return null; }

// /**
//  * Select a new line in a sublist.
//  * @restriction Only supported for sublists of type inlineeditor and editor
//  *
//  * @param {string} type sublist name
//  * @return {void}
//  *
//  * @since 2005.0
//  */
// function nlapiSelectNewLineItem(type) { return null; }

// /**
//  * Refresh the sublist table.
//  * @restriction Only supported for sublists of type inlineeditor, editor, and staticlist
//  * @restriction Client SuiteScript only.
//  *
//  * @param {string} type sublist name
//  * @return{void}
//  *
//  * @since 2005.0
//  */
// function nlapiRefreshLineItems(type) { return null; }

// /**
//  * Adds a select option to a scripted select or multiselect field.
//  * @restriction Client SuiteScript only
//  *
//  * @param {string} fldnam field name
//  * @param {string} value internal ID for select option
//  * @param {string} text display text for select option
//  * @param {boolean} [selected] if true then option will be selected by default
//  * @return {void}
//  *
//  * @since 2008.2
//  */
// function nlapiInsertSelectOption(fldnam, value, text, selected) { return null; }

// /**
//  * Removes a select option (or all if value is null) from a scripted select or multiselect field.
//  * @restriction Client SuiteScript only
//  *
//  * @param {string} fldnam field name
//  * @param {string} value internal ID of select option to remove
//  * @return {void}
//  *
//  * @since 2008.2
//  */
// function nlapiRemoveSelectOption(fldnam, value) { return null; }

// /**
//  * Adds a select option to a scripted select or multiselect sublist field.
//  * @restriction Client SuiteScript only
//  *
//  * @param {string} type	sublist name
//  * @param {string} fldnam sublist field name
//  * @param {string} value internal ID for select option
//  * @param {string} text display text for select option
//  * @param {boolean} [selected] if true then option will be selected by default
//  * @return {void}
//  *
//  * @since 2008.2
//  */
// function nlapiInsertLineItemOption(type, fldnam, value, text, selected) { return null; }

// /**
//  * Removes a select option (or all if value is null) from a scripted select or multiselect sublist field.
//  * @restriction Client SuiteScript only
//  *
//  * @param {string} type	sublist name
//  * @param {string} fldnam sublist field name
//  * @param {string} value internal ID for select option to remove
//  * @return {void}
//  *
//  * @since 2008.2
//  */
// function nlapiRemoveLineItemOption(type, fldnam, value) { return null; }

// /**
//  * Returns true if any changes have been made to a sublist.
//  * @restriction Client SuiteScript only
//  *
//  * @param {string} type sublist name
//  * @return {boolean}
//  *
//  * @since 2005.0
//  */
// function nlapiIsLineItemChanged(type) { return null; }

// /**
//  * Return an record object containing the data being submitted to the system for the currenr record.
//  * @restriction User Event scripts only
//  *
//  * @return {nlobjRecord}
//  *
//  * @since 2008.1
//  */
// function nlapiGetNewRecord() { return null; }

// /**
//  * Return an record object containing the current record's data prior to the write operation.
//  * @restriction beforeSubmit|afterSubmit User Event scripts only
//  *
//  * @return {nlobjRecord}
//  *
//  * @since 2008.1
//  */
// function nlapiGetOldRecord() { return null; }

// /**
//  * Create an nlobjError object that can be used to abort script execution and configure error notification
//  *
//  * @param {string} 	code error code
//  * @param {string} 	details error description
//  * @param {boolean} [suppressEmail] if true then suppress the error notification emails from being sent out (false by default).
//  * @return {nlobjError}
//  *
//  * @since 2008.2
//  */
// function nlapiCreateError(code,details,suppressEmail) { return null; }

// /**
//  * Return a new entry form page.
//  * @restriction Suitelets only
//  *
//  * @param {string} 	title page title
//  * @param {boolean} [hideHeader] true to hide the page header (false by default)
//  * @return {nlobjForm}
//  *
//  * @since 2008.2
//  */
// function nlapiCreateForm(title, hideHeader) { return null; }

// /**
//  * Return a new list page.
//  * @restriction Suitelets only
//  *
//  * @param {string} 	title page title
//  * @param {boolean} [hideHeader] true to hide the page header (false by default)
//  * @return {nlobjList}
//  *
//  * @since 2008.2
//  */
// function nlapiCreateList(title, hideHeader) { return null; }

// /**
//  * Return a new assistant page.
//  * @restriction Suitelets only
//  *
//  * @param {string} 	title page title
//  * @param {boolean} [hideHeader] true to hide the page header (false by default)
//  * @return {nlobjAssistant}
//  *
//  * @since 2009.2
//  */
// function nlapiCreateAssistant(title, hideHeader) { return null; }

// /**
//  * Load a file from the file cabinet (via its internal ID or path).
//  * @governance 10 units
//  * @restriction Server SuiteScript only
//  *
//  * @param {string|number} id internal ID or relative path to file in the file cabinet (i.e. /SuiteScript/foo.js)
//  * @return {nlobjFile}
//  *
//  * @since 2008.2
//  */
// function nlapiLoadFile(id) { return null; }

// /**
//  * Add/update a file in the file cabinet.
//  * @governance 20 units
//  * @restriction Server SuiteScript only
//  *
//  * @param {nlobjFile} file a file object to submit
//  * @return {number} return internal ID of file
//  *
//  * @since 2009.1
//  */
// function nlapiSubmitFile(file) { return null; }

// /**
//  * Delete a file from the file cabinet.
//  * @governance 20 units
//  * @restriction Server SuiteScript only
//  *
//  * @param {number} id internal ID of file to be deleted
//  * @return {String} the id of the deleted file
//  *
//  * @since 2009.1
//  */
// function nlapiDeleteFile(id) { return null; }

// /**
//  * Instantiate a file object (specifying the name, type, and contents which are base-64 encoded for binary types.)
//  * @restriction Server SuiteScript only
//  *
//  * @param {string} name file name
//  * @param {string} type file type i.e. plainText, htmlDoc, pdf, word (see documentation for the list of supported file types)
//  * @param {string} contents string containing file contents (must be base-64 encoded for binary types)
//  * @return {nlobjFile}
//  *
//  * @since 2009.1
//  */
// function nlapiCreateFile(name, type, contents) { return null; }

// /**
//  * Perform a mail merge operation using any template and up to 2 records and returns an nlobjFile with the results.
//  * @restriction only supported for record types that are available in mail merge: transactions, entities, custom records, and cases
//  * @restriction Server SuiteScript only
//  * @governance 10 units
//  *
//  * @param {number} 	id internal ID of template
//  * @param {string} 	baseType primary record type
//  * @param {number} 	baseId internal ID of primary record
//  * @param {string} 	[altType] secondary record type
//  * @param {number} 	[altId] internal ID of secondary record
//  * @param {object} 	[fields] Object of merge field values to use in the mail merge (by default all field values are obtained from records) which overrides those from the record.
//  * @return {nlobjFile}
//  *
//  * @since 2008.2
//  */
// function nlapiMergeRecord(id, baseType, baseId, altType, altId, fields) { return null; }

// /**
//  * Print a record (transaction) gievn its type, id, and output format.
//  * @restriction Server SuiteScript only
//  * @governance 10 units
//  *
//  * @param {string} 	type print output type: transaction|statement|packingslip|pickingticket
//  * @param {number} 	id internal ID of record to print
//  * @param {string} 	[format] output format: html|pdf|default
//  * @param {object} 	[properties] Object of properties used to configure print
//  * @return {nlobjFile}
//  *
//  * @since 2008.2
//  */
// function nlapiPrintRecord(type, id, format, properties) { return null; }

// /**
//  * Generate a PDF from XML using the BFO report writer (see http://big.faceless.org/products/report/).
//  * @restriction Server SuiteScript only
//  * @governance 10 units
//  *
//  * @param {string} input string containing BFO compliant XHTML
//  * @return {nlobjFile}
//  *
//  * @since 2009.1
//  */
// function nlapiXMLToPDF(input) { return null; }

// /**
//  * Create a template renderer used to generate various outputs based on a template.
//  * @restriction Server SuiteScript only
//  * @governance 10 units
//  *
//  * @param {string} type	media type: pdf|html
//  * @param {string} [engineType] [optional]: default is freemarker/html
//  * @return {nlobjTemplateRenderer}
//  *
//  */
// function nlapiCreateTemplateRenderer() { return null; }

// /**
//  * Create an email merger used to assemble subject and body text of an email from a given
//  * FreeMarker template and a set of associated records.
//  * @restriction Server SuiteScript only
//  *
//  * @param {number} templateId	internal ID of the template
//  * @return {nlobjEmailMerger}
//  *
//  * @since 2015.1
//  */
// function nlapiCreateEmailMerger(id) { return null; }

// /**
//  * Create an entry in the script execution log (note that execution log entries are automatically purged after 30 days).
//  *
//  * @param {string} type	log type: debug|audit|error|emergency
//  * @param {string} title log title (up to 90 characters supported)
//  * @param {string} [details] log details (up to 3000 characters supported)
//  * @return {void}
//  *
//  * @since 2008.1
//  */
// function nlapiLogExecution(type, title, details) { return null; }

// /**
//  * Queue a scheduled script for immediate execution and return the status QUEUED if successfull.
//  * @restriction Server SuiteScript only
//  * @governance 20 units
//  *
//  * @param {string|number}	script script ID or internal ID of scheduled script
//  * @param {string|number} [deployment] script ID or internal ID of scheduled script deployment. If empty, the first "free" deployment (i.e. status = Not Scheduled or Completed) will be used
//  * @param {object} 		parameters Object of parameter name->values used in this scheduled script instance
//  * @return {string}	QUEUED or null if no available deployments were found or the current status of the deployment specified if it was not available.
//  *
//  * @since 2008.1
//  */
// function nlapiScheduleScript(script, deployment, parameters) { return null; }

// /**
//  * Return a URL with a generated OAuth token.
//  * @restriction Suitelets and Portlets only
//  * @governance 20 units
//  *
//  * @param {string} ssoAppKey
//  * @return {string}
//  *
//  * @since 2009.2
//  */
// function nlapiOutboundSSO(ssoAppKey) { return null; }

// /**
//  * Loads a configuration record
//  * @restriction Server SuiteScript only
//  * @governance 10 units
//  *
//  * @param {string} type
//  * @return {nlobjConfiguration}
//  *
//  * @since 2009.2
//  */
// function nlapiLoadConfiguration(type) { return null; }

// /**
//  * Commits all changes to a configuration record.
//  * @restriction Server SuiteScript only
//  * @governance 10 units
//  *
//  * @param {nlobjConfiguration} setup record
//  * @return (void)
//  *
//  * @since 2009.2
//  */
// function nlapiSubmitConfiguration(setup) { return null; }

// /**
//  * Convert a String into a Date object.
//  *
//  * @param {string} str date string in the user's date format, timeofday format, or datetime format
//  * @param {string} format format type to use: date|datetime|timeofday with date being the default
//  * @return {Date}
//  *
//  * @since 2005.0
//  */
// function nlapiStringToDate(str, format) { return null; }

// /**
//  * Convert a Date object into a String
//  *
//  * @param {Date} 	d date object being converted to a string
//  * @param {string} [formattype] format type to use: date|datetime|timeofday with date being the default
//  * @return {string}
//  *
//  * @since 2005.0
//  */
// function nlapiDateToString(d, formattype) { return null; }

// /**
//  * Add days to a Date object and returns a new Date
//  *
//  * @param {Date} d date object used to calculate the new date
//  * @param {number}	days the number of days to add to this date object.
//  * @return {Date}
//  *
//  * @since 2008.1
//  */
// function nlapiAddDays(d, days) { return null; }

// /**
//  * Add months to a Date object and returns a new Date.
//  *
//  * @param {Date} d date object used to calculate the new date
//  * @param {number} months the number of months to add to this date object.
//  * @return {Date}
//  *
//  * @since 2008.1
//  */
// function nlapiAddMonths(d, months) { return null; }

// /**
//  * Format a number for data entry into a currency field.
//  *
//  * @param {string} str numeric string used to format for display as currency using user's locale
//  * @return {string}
//  *
//  * @since 2008.1
//  */
// function nlapiFormatCurrency(str) { return null; }

// /**
//  * Encrypt a String using a SHA-1 hash function
//  *
//  * @param {string} s string to encrypt
//  * @return {string}
//  *
//  * @since 2009.2
//  */
// function nlapiEncrypt(s) { return null; }

// /**
//  * Escape a String for use in an XML document.
//  *
//  * @param {string} text string to escape
//  * @return {string}
//  *
//  * @since 2008.1
//  */
// function nlapiEscapeXML(text) { return null; }

// /**
//  * Convert a String into an XML document. Note that in Server SuiteScript XML is supported natively by the JS runtime using the e4x standard (http://en.wikipedia.org/wiki/E4X)
//  * This makes scripting XML simpler and more efficient
//  *
//  * @param {string} str string being parsed into an XML document
//  * @return {document}
//  *
//  * @since 2008.1
//  */
// function nlapiStringToXML(str) { return null; }

// /**
//  * Convert an XML document into a String.  Note that in Server SuiteScript XML is supported natively by the JS runtime using the e4x standard (http://en.wikipedia.org/wiki/E4X)
//  * This makes scripting XML data simpler and more efficient
//  *
//  * @param {document} xml document being serialized into a string
//  * @return {string}
//  *
//  * @since 2008.1
//  */
// function nlapiXMLToString(xml) { return null; }

// /**
//  * Validate that a given XML document conforms to a given XML schema. XML Schema Definition (XSD) is the expected schema format.
//  *
//  * @param {document} xmlDocument xml to validate
//  * @param {document} schemaDocument schema to enforce
//  * @param {string} schemaFolderId if your schema utilizes <import> or <include> tags which refer to sub-schemas by file name (as opposed to URL),
//  *                 provide the Internal Id of File Cabinet folder containing these sub-schemas as the schemaFolderId argument
//  * @throws {nlobjError} error containsing validation failure message(s) - limited to first 10
//  *
//  * @since 2014.1
//  */
// function nlapiValidateXML(xmlDocument, schemaDocument, schemaFolderId) { return null; }

// /**
//  * select a value from an XML node using XPath. Supports custom namespaces (nodes in default namespace can be referenced using "nlapi" as the prefix)
//  *
//  * @param {node} node node being queried
//  * @param {string} xpath string containing XPath expression.
//  * @return {string}
//  *
//  * @since 2008.2
//  */
// function nlapiSelectValue(node, xpath) { return null; }

// /**
//  * @typedef {object} node
//  */

// /**
//  * Select an array of values from an XML node using XPath. Supports custom namespaces (nodes in default namespace can be referenced using "nlapi" as the prefix)
//  *
//  * @param {node} 	node node being queried
//  * @param {string} 	xpath string containing XPath expression.
//  * @return {string[]}
//  *
//  * @since 2008.1
//  */
// function nlapiSelectValues(node, xpath) { return null; }

// /**
//  * Select a node from an XML node using XPath. Supports custom namespaces (nodes in default namespace can be referenced using "nlapi" as the prefix)
//  *
//  * @param {node} 	node node being queried
//  * @param {string} 	xpath string containing XPath expression.
//  * @return {node}
//  *
//  * @since 2008.1
//  */
// function nlapiSelectNode(node, xpath) { return null; }

// /**
//  * Select an array of nodes from an XML node using XPath. Supports custom namespaces (nodes in default namespace can be referenced using "nlapi" as the prefix)
//  *
//  * @param {node} 	node node being queried
//  * @param {string} 	xpath string containing XPath expression.
//  * @return {node[]}
//  *
//  * @since 2008.1
//  */
// function nlapiSelectNodes(node, xpath) { return null; }

// /**
//  * Calculate exchange rate between two currencies as of today or an optional effective date.
//  * @governance 10 units
//  *
//  * @param {string|number} fromCurrency internal ID or currency code of currency we are converting from
//  * @param {string|number} toCurrency internal ID or currency code of currency we are converting to
//  * @param {string} [date] string containing date of effective exchange rate. defaults to today
//  * @return {number}
//  *
//  * @since 2009.1
//  */
// function nlapiExchangeRate(fromCurrency, toCurrency, date) { return null; }

// /**
//  * Initiates a workflow on-demand and returns the workflow instance ID for the workflow-record combination.
//  * @governance 20 units
//  *
//  * @param {string} recordtype record type ID of the workflow base record
//  * @param {number} id internal ID of the base record
//  * @param {string|number} workflowid internal ID or script ID for the workflow definition
//  * @return {number}
//  *
//  * @since 2010.1
//  */
// function nlapiInitiateWorkflow(recordtype, id, workflowid) { return null; }

// /**
//  * Initiates a workflow on-demand and returns the workflow instance ID for the workflow-record combination.
//  * @governance 20 units
//  *
//  * @param {string} recordtype record type ID of the workflow base record
//  * @param {string|number} id internal ID of the base record
//  * @param {string|number} workflowid internal ID or script ID for the workflow definition
//  * @return {string}
//  *
//  * @since 2014.2
//  */
// function nlapiInitiateWorkflowAsync(recordType, id, workflowId, parameters){return null;}

// /**
//  * Triggers a workflow on a record.
//  * @governance 20 units
//  *
//  * @param {string} recordtype record type ID of the workflow base record
//  * @param {number} id internal ID of the base record
//  * @param {string|number} workflowid internal ID or script ID for the workflow definition
//  * @param {string|number} actionid internal ID or script ID of the action script
//  * @param {string|number} stateid internal ID or script ID of the state contains the referenced add button action
//  * @return {number}
//  *
//  * @since 2010.1
//  */
// function nlapiTriggerWorkflow(recordtype, id, workflowid, actionid, stateid) { return null; }

// /**
//  * Initializes a new record and returns an nlobjCSVImport object.
//  *
//  * @restriction only supported for bundle installation scripts, scheduled scripts, and RESTlets
//  * @return {nlobjCSVImport}
//  *
//  * @since 2012.2
//  */
// function nlapiCreateCSVImport() { return null; }

// /**
//  * @class
//  */
// function nlobjCSVImport(){}

// /**
//  * Sets the data to be imported in a linked file for a multi-file import job, by referencing a file in the file cabinet using nlapiLoadFile(id), or by inputting CSV data as raw string.
//  *
//  * @param {string} sublist The internal ID of the record sublist for which data is being imported.
//  * @param {string | nlobjFile} file Raw data or nlobjFile object containing CSV data
//  * @return {nlobjCSVImport}
//  *
//  * @exception {SSS_INVALID_CSV_CONTENT}
//  *
//  * @since 2012.2
//  */
// nlobjCSVImport.prototype.setLinkedFile = function(sublist, file) { return null; }

// /**
//  * Sets the name of the saved import map to be used for an import, by referencing the internal ID or script ID of the import map.
//  *
//  * @param {string} sublist The internal ID or script ID of the saved mapping to use for the import job.
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjCSVImport
//  *
//  * @since 2012.2
//  */
// nlobjCSVImport.prototype.setMapping = function(savedImport) { return null; }

// /**
//  * Sets the name of the saved import map to be used for an import, by referencing the internal ID or script ID of the import map.
//  *
//  * @param {string} option Then name of the option.
//  * @param {string} value The value for the option
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjCSVImport
//  *
//  * @since 2012.2
//  */
// nlobjCSVImport.prototype.setOption = function(option, value) { return null; }

// /**
//  * Sets the data to be imported in the primary file for an import job, by referencing a file in the file cabinet using nlapiLoadFile, or by inputting CSV data as raw string.
//  *
//  * @param {string | nlobjFile} file Raw data or nlobjFile object containing CSV data
//  * @return {void}
//  *
//  * @exception {SSS_INVALID_CSV_CONTENT}
//  *
//  * @method
//  * @memberOf nlobjCSVImport
//  *
//  * @since 2012.2
//  */
// nlobjCSVImport.prototype.setPrimaryFile = function(file) { return null; }

// /**
//  * Sets the data to be imported in the primary file for an import job, by referencing a file in the file cabinet using nlapiLoadFile, or by inputting CSV data as raw string.
//  *
//  * @param {string} queue The new queue number. Valid values range from '1' to '5', depending upon the SuiteCloud License.
//  * @return {void}
//  *
//  * @exception {SSS_INVALID_CSV_QUEUE}
//  *
//  * @method
//  * @memberOf nlobjCSVImport
//  *
//  * @since 2014.1
//  */
// nlobjCSVImport.prototype.setQueue = function(queue) { return null; }

// /**
//  * Creates an instance of a report definition object.
//  *
//  * @return {nlobjReportDefinition}
//  *
//  * @since 2012.2
//  */
// function nlapiCreateReportDefinition() { return null; }

// /**
//  * Creates an nlobjReportForm object to render the report definition.
//  *
//  * @param {string} title the title of the form
//  * @return {nlobjReportForm}
//  *
//  * @since 2012.2
//  */
// function nlapiCreateReportForm(title) { return null; }

// /**
//  * @class 
//  */
// function nlobjReportForm(){}

// /**
//  * Creates a new search.
//  *
//  * @param {string} type the record type you are searching
//  * @param {nlobjSearchFilter | nlobjSearchFilter[] | Object[]} filters a single nlobjSearchFilter object or an array of nlobjSearchFilter objects or a search filter expression
//  * @param {nlobjSearchColumn|nlobjSearchColumn[]} columns a single nlobjSearchColumn object an array of nlobjSearchColumn objects
//  * @return {nlobjSearch}
//  *
//  * @since 2012.1
//  */
// function nlapiCreateSearch(type, filters, columns) { return null; }

// /**
//  * @class 
//  */
// function nlobjSearch(){}

// /**
//  * Adds a single return column to the search. Note that existing columns on the search are not changed.
//  *
//  * @param {nlobjSearchColumn} column The nlobjSearchColumn you want added to the search.
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.addColumn = function(column) { return null; }

// /**
//  * Adds multiple return columns to the search. Note that existing columns on the search are not changed.
//  *
//  * @param {nlobjSearchColumn[]} columns The nlobjSearchColumn[] you want added to the search.
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.addColumns = function(columns) { return null; }

// /**
//  * Adds a single search filter. Note that existing filters on the search are not changed.
//  *
//  * @param {nlobjSearchFilter} filter The nlobjSearchFilter you want added to the search.
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.addFilter = function(filter) { return null; }

// /**
//  * Adds a search filter list. Note that existing filters on the search are not changed.
//  *
//  * @param {nlobjSearchFilter[]} filters The nlobjSearchFilter[] you want added to the search.
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.addFilters = function(filters) { return null; }

// /**
//  * Deletes a given saved search that was created through scripting or through the UI.
//  *
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.deleteSearch = function() { return null; }

// /**
//  * Gets the search return columns for the search.
//  *
//  * @return {nlobjSearchColumn[]}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.getColumns = function() { return null; }

// /**
//  * Gets the filter expression for the search.
//  *
//  * @return {Object[]}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.getFilterExpression = function() { return null; }

// /**
//  * Gets the filters for the search.
//  *
//  * @return {nlobjSearchFilter[]}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.getFilters = function() { return null; }

// /**
//  * Gets the internal ID of the search.
//  *
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.getId = function() { return null; }

// /**
//  * Gets whether the nlobjSearch has been set as public search.
//  *
//  * @return {boolean}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.getIsPublic = function() { return null; }

// /**
//  * Gets the script ID of the search.
//  *
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.getScriptId = function() { return null; }

// /**
//  * Returns the record type that the search was based on. This method is helpful when you have the internal ID of the search, but do not know the record type the search was based on.
//  *
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.getSearchType = function() { return null; }

// /**
//  * Runs an ad-hoc search, returning the results. Be aware that calling this method does NOT save the search.
//  *
//  * @return {nlobjSearchResultSet}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.runSearch = function() { return null; }

// /**
//  * Saves the search created by nlapiCreateSearch(type, filters, columns).
//  *
//  * @param {string} [title] The title you want to give the saved search.
//  * @param {string} [scriptId] The script ID you want to assign to the saved search. All saved search script IDs must be prefixed with customsearch.
//  *
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.saveSearch = function(title, scriptId) { return null; }

// /**
//  * Sets the return columns for this search, overwriting any prior columns. If null is passed in it is treated as if it were an empty array and removes any existing columns on the search.
//  *
//  * @param {nlobjSearchColumn[]} [columns] The nlobjSearchColumn[] you want to set in the search. Passing in null or [] removes all columns from the search.
//  *
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.setColumns = function(columns) { return null; }

// /**
//  * Sets the search filter expression, overwriting any prior filters. If null is passed in, it is treated as if it was an empty array and removes any existing filters on this search.
//  *
//  * @param {Object[]} filterExpression The filter expression you want to set in the search. Passing in null or [] removes all filters from the search.
//  *
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.setFilterExpression = function(filterExpression) { return null; }

// /**
//  * Sets the filters for this search, overwriting any prior filters. If null is passed in it is treated as if it were an empty array and removes any existing filters on this search.
//  *
//  * @param {nlobjSearchFilter[]} filters The nlobjSearchFilter[] you want to set in the search. Passing in null or [] removes all filters from the search.
//  *
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.setFilters = function(filters) { return null; }

// /**
//  * Sets whether the search is public or private. By default, all searches created through nlapiCreateSearch(type, filters, columns) are private.
//  *
//  * @param {boolean} type Set to true to designate the search as a public search. Set to false to designate the search as a private search.
//  *
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.setIsPublic = function(type) { return null; }

// /**
//  * Acts like nlapiSetRedirectURL(type, identifier, id, editmode, parameters) but redirects end users to a populated search definition page. You can use this method with any kind of search that is held in the nlobjSearch object.
//  *
//  * @restriction This method is supported in afterSubmit user event scripts, Suitelets, and client scripts.
//  *
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.setRedirectURLToSearch = function() { return null; }

// /**
//  * Acts like nlapiSetRedirectURL(type, identifier, id, editmode, parameters) but redirects end users to a search results page. You can use this method with any kind of search that is held in the nlobjSearch object.
//  *
//  * This method is supported in afterSubmit user event scripts, Suitelets, and client scripts.
//  *
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSearch
//  *
//  * @since 2012.1
//  */
// nlobjSearch.prototype.setRedirectURLToSearchResults = function() { return null; }

// /**
//  * @class
//  */
// function nlobjSearchResultSet(){}

// /**
//  * Calls the developer-defined callback function for every result in this set.
//  *
//  * @param {function} callback A JavaScript function. This may be defined as a separate named function, or it may be an anonymous inline function.
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSearchResultSet
//  *
//  * @since 2012.1
//  */
// nlobjSearchResultSet.prototype.forEachResult = function(callback) { return null; }

// /**
//  * Returns a list of nlobjSearchColumn objects for this result set. This list contains one nlobjSearchColumn object for each result column in the nlobjSearchResult objects returned by this search.
//  *
//  * @return {nlobjSearchColumn[]}
//  *
//  * @method
//  * @memberOf nlobjSearchResultSet
//  *
//  * @since 2012.1
//  */
// nlobjSearchResultSet.prototype.getColumns = function() { return null; }

// /**
//  * Retrieve a slice of the search result. The start parameter is the inclusive index of the first result to return. The end parameter is the exclusive index of the last result to return.
//  *
//  * @param {number} start The index number of the first result to return, inclusive.
//  * @param {number} end The index number of the last result to return, exclusive.
//  * @return {nlobjSearchResult[]}
//  *
//  * @exception {SSS_INVALID_SEARCH_RESULT_INDEX}
//  * @exception {SSS_SEARCH_RESULT_LIMIT_EXCEEDED}
//  *
//  * @method
//  * @memberOf nlobjSearchResultSet
//  *
//  * @since 2012.1
//  */
// nlobjSearchResultSet.prototype.getResults = function(start, end) { return null; }

// /**
//  * Sets the given field to disabled or enabled.
//  *
//  * @restriction supported in client scripts only
//  * @param {string} fldnam the internal ID name of the field to enable/disable
//  * @param {boolean} val if set to true, the field is disabled; if set to false, it is enabled
//  * @return {void}
//  *
//  * @since 2009.1
//  */
// function nlapiDisableField(fldnam, val) { return null; }

// /**
//  * Sets the given line item field of a sublist to disabled or enabled.
//  *
//  * @restriction supported in client scripts only
//  * @param {string} type the sublist internal ID
//  * @param {string} fldnam the name of the line item field to enable/disable
//  * @param {boolean} val if set to true, the field is disabled; if set to false, it is enabled
//  * @return {void}
//  *
//  * @since 2009.1
//  */
// function nlapiDisableLineItemField(type, fldnam, val) { return null; }

// /**
//  * Returns the values of a multiselect sublist field on the currently selected line.
//  *
//  * @param {string} type the sublist internal ID
//  * @param {string} fldnam the name of the multiselect field
//  * @return {string[]} an array of string values for the multiselect sublist field
//  *
//  * @since 2012.1
//  */
// function nlapiGetCurrentLineItemValues(type, fldnam) { return null; }

// /**
//  * This API returns the value of a datetime field. If timeZone is passed in, the datetime value is converted to that time zone and then returned.
//  * If timeZone is not passed in, the datetime value is returned in the default time zone.
//  *
//  * @param {string} fieldId the internal field ID of a datetime field
//  * @param {string | number} [timeZone] one of values (string) or keys (int) from the Olson Values table
//  * @return {string} the string value of a datetime field
//  *
//  * @since 2013.2
//  */
// function nlapiGetDateTimeValue(fieldId, timeZone) { return null; }

// /**
//  * Returns a job manager instance.
//  *
//  * @param {string} jobType set to DUPLICATERECORDS
//  * @return {nlobjJobManager}
//  *
//  * @since 2013.1
//  */
// function nlapiGetJobManager(jobType) { return null; }

// /**
//  * Returns the values of a multiselect sublist field on a selected line.
//  *
//  * @param {string} type the sublist internal ID
//  * @param {string} fldnam the name of the multiselect field
//  * @param {number} linenum the line number for this field (1-based)
//  * @return {string[]} an array of string values for the multiselect sublist field
//  *
//  * @since 2012.1
//  */
// function nlapiGetLineItemValues(type, fldnam, linenum) { return null; }

// /**
//  * Returns the NetSuite login credentials of currently logged-in user.
//  *
//  * @governance 10 units
//  * @restriction supported in user event, portlet, Suitelet, RESTlet and SSP scripts
//  * @return {nlobjLogin}
//  *
//  * @since 2012.2
//  */
// function nlapiGetLogin() { return null; }

// /**
//  * Loads an existing saved search.
//  *
//  * @governance 5 units
//  * @param {string} type the record type you are searching
//  * @param {string} id the internal ID or script ID of the saved search
//  * @return {nlobjSearch}
//  *
//  * @since 2012.1
//  */
// function nlapiLoadSearch(type, id) { return null; }

// /**
//  * This API is deprecated as of NetSuite Version 2008 Release 1.
//  *
//  * @param {number} 	id internal ID of template
//  * @param {string} 	baseType primary record type
//  * @param {number} 	baseId internal ID of primary record
//  * @param {string} 	[altType] secondary record type
//  * @param {number} 	[altId] internal ID of secondary record
//  * @param {object} 	[fields] Object of merge field values to use in the mail merge (by default all field values are obtained from records) which overrides those from the record.
//  * @return {nlobjFile}
//  *
//  * @since 2007.0
//  * @deprecated
//  */
// function nlapiMergeTemplate(id, baseType, baseId, altType, altId, fields) { return null; }

// /**
//  * Causes a FORM type nlobjPortlet to immediately reload.
//  *
//  * @return {void}
//  *
//  * @since 2011.1
//  */
// function nlapiRefreshPortlet() { return null; }

// /**
//  * Causes a custom form portlet to be resized.
//  *
//  * @return {void}
//  *
//  * @since 2011.1
//  */
// function nlapiResizePortlet() { return null; }

// /**
//  * Set the value of a field on the currently selected line.
//  * @restriction synchronous arg is only supported in client SuiteScript
//  *
//  * @param {string} type sublist name
//  * @param {string} fldnam sublist field name
//  * @param {string} value field value
//  * @param {boolean} [firefieldchanged]	if false then the field change event is suppressed (defaults to true)
//  * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
//  * @return {void}
//  *
//  * @since 2011.2
//  */
// function nlapiSetCurrentLineItemValues(type,fldnam,values,firefieldchanged,synchronous) { return null; }

// /**
//  * Set the values of a field on the currently selected line.
//  * @restriction synchronous arg is only supported in client SuiteScript
//  *
//  * @param {string} fieldId the internal field ID of a datetime field
//  * @param {string} The date and time in format mm/dd/yyyy hh:mm:ss am|pm
//  * @param {string | number} [timeZone] one of values (string) or keys (int) from the Olson Values table
//  * @return {string}
//  *
//  * @since 2011.2
//  */
// function nlapiSetDateTimeValue(fieldId, value, timezone) { return null; }

// /**
//  * Creates a recovery point saving the state of the script's execution.
//  *
//  * @return {object}
//  *
//  * @since 2011.2
//  */
// function nlapiSetRecoveryPoint() { return null; }

// /**
//  * @class
//  */
// function nlobjSearchResultSet(){}

// /**
//  * @class
//  */
// function nlobjSCVImport(){}
// /**
//  * Submits a CSV import job to asynchronously import record data into NetSuite.
//  *
//  * @param {nlobjSCVImport} csvImport
//  * @return {string}
//  *
//  * @since 2011.2
//  */
// function nlapiSubmitCSVImport(csvImport) { return null; }

// /**
//  * view a subrecord on body field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	fldnam body field name
//  * @retun {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function nlapiViewSubrecord(fldname) { return null; }

// /**
//  * Creates a recovery point and then reschedules the script.
//  *
//  * @return {object}
//  *
//  * @since 2011.2
//  */
// function nlapiYieldScript() { return null; }
// /**
//  * Create a subrecord on a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @return {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function nlapiCreateCurrentLineItemSubrecord(type,fldnam) { return null; }

// /**
//  * edit a subrecord on a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @return {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function nlapiEditCurrentLineItemSubrecord(type,fldnam) { return null; }

// /**
//  * remove a subrecord on a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @return {void}
//  *
//  * @since 2011.2
//  */
// function nlapiRemoveCurrentLineItemSubrecord(type,fldnam) { return null; }

// /**
//  * view a subrecord on a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @return {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function nlapiViewCurrentLineItemSubrecord(type,fldnam) { return null; }

// /**
//  * view a subrecord on a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @return {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function nlapiViewLineItemSubrecord(type,fldnam,linenum) { return null; }

// /**
//  * create a subrecord on body field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	fldnam body field name
//  * @retun {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function nlapiCreateSubrecord(fldnam) { return null; }

// /**
//  * edit a subrecord on body field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	fldnam body field name
//  * @retun {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function nlapiEditSubrecord(fldnam) { return null; }

// /**
//  * remove a subrecord on body field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	fldnam body field name
//  * @retun {void}
//  *
//  * @since 2011.2
//  */
// function nlapiRemoveSubrecord(fldnam) { return null; }
// /**
//  * edit a subrecord on a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @retun {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function nlapiEditCurrentLineItemSubrecord(type,fldnam) { return null; }

// /**
//  * remove a subrecord on a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @retun {void}
//  *
//  * @since 2011.2
//  */
// function nlapiRemoveCurrentLineItemSubrecord(type,fldnam) { return null; }


// /**
//  * view a subrecord on a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @retun {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function nlapiViewCurrentLineItemSubrecord(type,fldnam) { return null; }


// /**
//  * view a subrecord on a sublist field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	type sublist name
//  * @param {string} 	fldnam sublist field name
//  * @retun {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function nlapiViewLineItemSubrecord(type,fldnam,linenum) { return null; }

// /**
//  * create a subrecord on body field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	fldnam body field name
//  * @retun {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function createSubrecord(fldnam) { return null; }

// /**
//  * edit a subrecord on body field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	fldnam body field name
//  * @retun {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function editSubrecord(fldnam) { return null; }

// /**
//  * remove a subrecord on body field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	fldnam body field name
//  * @retun {void}
//  *
//  * @since 2011.2
//  */
// function removeSubrecord(fldnam) { return null; }

// /**
//  * view a subrecord on body field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} 	fldnam body field name
//  * @retun {nlobjSubrecord}
//  *
//  * @since 2011.2
//  */
// function viewSubrecord(fldnam) { return null; }

// /**
//  * @class
//  */
// function nlobjSubrecord(){}

// /**
//  * Commit the subrecord after you finish modifying it.
//  *
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSubrecord
//  *
//  * @since 2008.1
//  */
// nlobjSubrecord.prototype.commit = function() { return null; }

// /**
//  * Cancel the any modification on subrecord.
//  *
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSubrecord
//  *
//  * @since 2008.1
//  */
// nlobjSubrecord.prototype.cancel = function() { return null; }

// /**
//  * Return a new instance of nlobjRecord used for accessing and manipulating record objects.
//  *
//  * @classDescription Class definition for business records in the system.
//  * @return {nlobjRecord}
//  * @constructor
//  *
//  * @since 2008.2
//  */
// function nlobjRecord() { return null; }

// /**
//  * Return the internalId of the record or NULL for new records.
//  *
//  * @return {number} Return the integer value of the record ID.
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.1
//  */
// nlobjRecord.prototype.getId = function() { return null; }

// /**
//  * Return the recordType corresponding to this record.
//  *
//  * @return {string} The string value of the record name internal ID
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.1
//  */
// nlobjRecord.prototype.getRecordType = function( ) { return null; }

// /**
//  * Return field metadata for field.
//  *
//  * @param {string} fldnam field name
//  * @return	{nlobjField}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.1
//  */
// nlobjRecord.prototype.getField = function(fldnam) { return null; }

// /**
//  * Return field metadata for field.
//  *
//  * @param {string} type matrix sublist name
//  * @param {string} fldnam matrix field name
//  * @param {column} linenum matrix column (1-based)
//  * @return {nlobjField}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.getMatrixField = function(type, fldnam, column) { return null; }

// /**
//  * Return metadata for sublist field.
//  *
//  * @param {string} type sublist name
//  * @param {string} fldnam sublist field name
//  * @param {number} [linenum] line number (1-based). If empty, the current sublist field is returned. only settable for sublists of type list
//  * @return {nlobjField}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.getLineItemField = function(type, fldnam, linenum) { return null; }

// /**
//  * Return metadata for sublist field.
//  *
//  * @param {string} type matrix sublist name
//  * @param {string} fldnam matrix field name
//  * @param {number} linenum line number
//  * @param {column} linenum matrix column (1-based)
//  * @return {nlobjField}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.getLineItemMatrixField = function(type, fldnam, linenum, column) { return null; }

// /**
//  * Set the value of a field.
//  *
//  * @param {string} name field name
//  * @param {string} value field value
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.1
//  */
// nlobjRecord.prototype.setFieldValue = function( name, value ) { return null; }

// /**
//  * Set the values of a multi-select field.
//  *
//  * @param {string} name field name
//  * @param {string[]} values string array containing field values
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.1
//  */
// nlobjRecord.prototype.setFieldValues = function( name, values ) { return null; }

// /**
//  * Return the value of a field.
//  *
//  * @param {string} name field name
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.1
//  */
// nlobjRecord.prototype.getFieldValue = function( name ) { return null; }

// /**
//  * Return the selected values of a multi-select field as an Array.
//  *
//  * @param {string} name field name
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.1
//  */
// nlobjRecord.prototype.getFieldValues = function( name ) { return null; }

// /**
//  * Set the value (via display value) of a select field.
//  * @restriction only supported for select fields
//  *
//  * @param {string} name field name
//  * @param {string} text field display value
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.2
//  */
// nlobjRecord.prototype.setFieldText = function( name, text ) { return null; }

// /**
//  * Set the values (via display values) of a multi-select field.
//  * @restriction only supported for multi-select fields
//  *
//  * @param {string} name field name
//  * @param {string[]} texts array of field display values
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.2
//  */
// nlobjRecord.prototype.setFieldTexts = function( name, texts ) { return null; }

// /**
//  * Return the display value for a select field.
//  * @restriction only supported for select fields
//  *
//  * @param {string} name field name
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.2
//  */
// nlobjRecord.prototype.getFieldText = function( name ) { return null; }

// /**
//  * Return the selected display values of a multi-select field as an Array.
//  * @restriction only supported for multi-select fields
//  *
//  * @param {string} name field name
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.2
//  */
// nlobjRecord.prototype.getFieldTexts = function( name ) { return null; }

// /**
//  * Get the value of a matrix header field.
//  *
//  * @param {string} type matrix sublist name
//  * @param {string} name	matrix field name
//  * @param {number} column matrix column index (1-based)
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.getMatrixValue = function( type, name, column ) { return null; }

// /**
//  * Set the value of a matrix header field.
//  *
//  * @param {string} 	type matrix sublist name
//  * @param {string} 	name	matrix field name
//  * @param {number} 	column matrix column index (1-based)
//  * @param {string} 	value field value
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.setMatrixValue = function( type, name, column, value ) { return null; }

// /**
//  * Return an Array of all field names on the record.
//  *
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.1
//  */
// nlobjRecord.prototype.getAllFields = function( ) { return null; }

// /**
//  * Return an Array of all field names on a record for a particular sublist.
//  *
//  * @param {string} group sublist name
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.2
//  */
// nlobjRecord.prototype.getAllLineItemFields = function( group ) { return null; }

// /**
//  * Set the value of a sublist field.
//  *
//  * @param {string} 	group sublist name
//  * @param {string} 	name sublist field name
//  * @param {number} 	line line number (1-based)
//  * @param {string} 	value sublist field value
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.1
//  */
// nlobjRecord.prototype.setLineItemValue = function( group, name, line, value ) { return null; }

// /**
//  * Set the value of a sublist field.
//  *
//  * @param {string} 	group sublist name
//  * @param {string} 	name sublist field name
//  * @param {number} 	line line number (1-based)
//  * @param {string} 	datetime value
//  * @param {string} 	timezone [optional] value
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2013.2
//  */
// nlobjRecord.prototype.setLineItemDateTimeValue = function( group, name, line, value, timezone ) { return null; }

// /**
//  * Return the value of a sublist field.
//  *
//  * @param {string} 	group sublist name
//  * @param {string} 	name sublist field name
//  * @param {number} 	line line number (1-based)
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.1
//  */
// nlobjRecord.prototype.getLineItemValue = function( group, name, line ) { return null; }

// /**
//  * Return the value of a sublist field.
//  *
//  * @param {string} 	group sublist name
//  * @param {string} 	name sublist field name
//  * @param {number} 	line line number (1-based)
//  * @param {string} 	[timezone] value
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2013.2
//  */
// nlobjRecord.prototype.getLineItemDateTimeValue = function( group, name, line, timezone ) { return null; }

// /**
//  * Return the text value of a sublist field.
//  *
//  * @param {string} 	group sublist name
//  * @param {string} 	name sublist field name
//  * @param {number} 	line line number (1-based)
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2008.2
//  */
// nlobjRecord.prototype.getLineItemText = function( group, name, line ) { return null; }

// /**
//  * Set the current value of a sublist field.
//  * @param {string} 	group sublist name
//  * @param {string} 	name sublist field name
//  * @param {string} 	value sublist field value
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.setCurrentLineItemValue = function( group, name, value ) { return null; }

// /**
//  * Set the current value of a sublist field.
//  * @param {string} 	group sublist name
//  * @param {string} 	name sublist field name
//  * @param {string} 	value sublist field value
//  * @param {string} 	[timezone] value
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2013.2
//  */
// nlobjRecord.prototype.setCurrentLineItemDateTimeValue = function( group, name, value,timezone ) { return null; }

// /**
//  * Return the current value of a sublist field.
//  *
//  * @param {string} 	group sublist name
//  * @param {string} 	name sublist field name
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.getCurrentLineItemValue = function( group, name ) { return null; }

// /**
//  * Return the current value of a sublist field.
//  *
//  * @param {string} 	group sublist name
//  * @param {string} 	name sublist field name
//  * @param {string} 	[timezone] value
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2013.2
//  */
// nlobjRecord.prototype.getCurrentLineItemDateTimeValue = function( group, name, timezone ) { return null; }

// /**
//  * Set the current value of a sublist matrix field.
//  *
//  * @param {string} 	group matrix sublist name
//  * @param {string} 	name matrix field name
//  * @param {number} 	column matrix field column index (1-based)
//  * @param {string} 	value matrix field value
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.setCurrentLineItemMatrixValue = function( group, name, column, value ) { return null; }

// /**
//  * Return the current value of a sublist matrix field.
//  *
//  * @param {string} 	group matrix sublist name
//  * @param {string} 	name matrix field name
//  * @param {number} 	column matrix field column index (1-based)
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.getCurrentLineItemMatrixValue = function( group, name, column ) { return null; }

// /**
//  * Return the number of columns for a matrix field.
//  *
//  * @param {string} 	group matrix sublist name
//  * @param {string} 	name matrix field name
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.getMatrixCount = function( group, name ) { return null; }

// /**
//  * Return the number of lines in a sublist.
//  *
//  * @param {string} group sublist name
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.getLineItemCount = function( group ) { return null; }

// /**
//  * Return line number for 1st occurence of field value in a sublist column.
//  *
//  * @param {string} group	sublist name
//  * @param {string} fldnam	sublist field name
//  * @param {string} value	sublist field value
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.findLineItemValue = function( group, fldnam, value ) { return null; }

// /**
//  * Return line number for 1st occurence of field value in a sublist column.
//  *
//  * @param {string} 	group	sublist name
//  * @param {string} 	fldnam	sublist field name
//  * @param {number} 	column  matrix column index (1-based)
//  * @param {string} 	value 	matrix field value
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.findLineItemMatrixValue = function( group, fldnam, column, value ) { return null; }

// /**
//  * Insert a new line into a sublist.
//  *
//  * @param {string} 	group sublist name
//  * @param {number} 	[line] line index at which to insert line
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.insertLineItem = function( group, line ) { return null; }

// /**
//  * Remove an existing line from a sublist.
//  *
//  * @param {string} 	group sublist name
//  * @param {number} 	[line] line number to remove
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.removeLineItem = function( group, line ) { return null; }

// /**
//  * Insert and select a new line in a sublist.
//  *
//  * @param {string} group sublist name
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.selectNewLineItem = function( group ) { return null; }

// /**
//  * Select an existing line in a sublist.
//  *
//  * @param {string} 	group sublist name
//  * @param {number} 	line  line number to select
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.selectLineItem = function( group, line ) { return null; }

// /**
//  * Commit the current line in a sublist.
//  *
//  * @param {string} 	group sublist name
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 2009.2
//  */
// nlobjRecord.prototype.commitLineItem = function( group ) { return null; }

// /**
//  * set the value of a field.
//  *
//  * @param {string} name field name
//  * @param {string} value field value
//  * @param {string} [timezone] Olson value
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since 20013.2
//  */
// nlobjRecord.prototype.setDateTimeValue = function (name, value, timezone) { return null; }

// /**
//  * Return the value of a field on the current record on a page.
//  * @restriction supported in client and user event scripts only.
//  * @param {string} fldnam the field name
//  * @param {string} timezone [optional] Olson value
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2013.2
//  */
// nlobjRecord.prototype.getDateTimeValue = function (fldnam, timezone) { return null; }

// /**
//  * Returns a nlobjSubrecord object. Use this API to create a subrecord from a sublist field on the parent record.
//  *
//  * @param {string} sublist The sublist internal ID on the parent record
//  * @param {string} fldname The internal ID of the 'subrecord field' on the sublist of the parent record
//  * @return {nlobjSubrecord}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2011.2
//  */
// nlobjRecord.prototype.createCurrentLineItemSubrecord = function (sublist, fldname) { return null; }

// /**
//  * Returns a nlobjSubrecord object. Use this API to create a subrecord from a body field on the parent record.
//  *
//  * @param {string} fldname The internal ID of the 'subrecord field' on the body of the parent record
//  * @return {nlobjSubrecord}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2011.2
//  */
// nlobjRecord.prototype.createSubrecord = function (fldname) { return null; }

// /**
//  * Returns a nlobjSubrecord object. Use this API to edit a subrecord from a sublist field on the parent record.
//  *
//  * @param {string} sublist The sublist internal ID on the parent record
//  * @param {string} fldname The internal ID of the 'subrecord field' on the sublist of the parent record
//  * @return {nlobjSubrecord}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2011.2
//  */
// nlobjRecord.prototype.editCurrentLineItemSubrecord = function (sublist, fldname) { return null; }

// /**
//  * Returns a nlobjSubrecord object. Use this API to edit a subrecord from a body field on the parent record.
//  *
//  * @param {string} fldname The internal ID of the 'subrecord field' on the body of the parent record
//  * @return {nlobjSubrecord}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2011.2
//  */
// nlobjRecord.prototype.editSubrecord = function (fldname) { return null; }

// /**
//  * Returns the values of a multiselect sublist field on the currently selected line. One example of a multiselect sublist field is the Serial Numbers field on the Items sublist.
//  * @restriction This function is not supported in client SuiteScript. It is meant to be used in user event scripts.
//  *
//  * @param {string} type The sublist internal ID
//  * @param {string} fldname The name of the multiselect field
//  * @return {nlobjSubrecord}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2011.2
//  */
// nlobjRecord.prototype.getCurrentLineItemValues = function (type, fldname) { return null; }

// /**
//  * Use this API to get the value of a matrix field that appears on a specific line in a specific column. This API can be used only in the context of a matrix sublist.
//  *
//  * @param {string} group The sublist internal ID
//  * @param {string} fldnam The internal ID of the matrix field whose value you want returned
//  * @param {number} linenum The line number for this field. Note the first line number on a sublist is 1 (not 0).
//  * @param {number} column The column number for this field. Column numbers start at 1 (not 0).
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2009.2
//  */
// nlobjRecord.prototype.getLineItemMatrixValue = function (group, fldnam, lineum, column) { return null; }

// /**
//  * Returns the values of a multiselect sublist field on a selected line. One example of a multiselect sublist field is the Serial Numbers field on the Items sublist.
//  * @restriction This function is not supported in client SuiteScript. It is meant to be used in user event scripts.
//  *
//  * @param {string} type The sublist internal ID
//  * @param {string} fldnam The internal ID of the multiselect field
//  * @param {number} linenum The line number for this field. Note the first line number on a sublist is 1 (not 0).
//  * @return {array}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2009.2
//  */
// nlobjRecord.prototype.getLineItemValues = function (type, fldnam, lineum) { return null; }

// /**
//  * Returns a nlobjSubrecord object. Use this API to remove a subrecord from a sublist field on the parent record.
//  *
//  * @param {string} sublist The sublist internal ID on the parent record
//  * @param {string} fldname The internal ID of the 'subrecord field' on the sublist of the parent record
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2011.2
//  */
// nlobjRecord.prototype.removeCurrentLineItemSubrecord = function (sublist, fldname) { return null; }

// /**
//  * Returns a nlobjSubrecord object. Use this API to remove a subrecord from a body field on the parent record.
//  *
//  * @param {string} fldname The internal ID of the 'subrecord field' on the body of the parent record
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2011.2
//  */
// nlobjRecord.prototype.removeSubrecord = function (fldname) { return null; }

// /**
//  * Returns a nlobjSubrecord object. Use this API to view a subrecord from a sublist field on the parent record.
//  *
//  * @param {string} sublist The sublist internal ID on the parent record
//  * @param {string} fldname The internal ID of the 'subrecord field' on the sublist of the parent record
//  * @return {nlobjSubrecord}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2011.2
//  */
// nlobjRecord.prototype.viewCurrentLineItemSubrecord = function (sublist, fldname) { return null; }

// /**
//  * Returns a nlobjSubrecord object. Use this API to view a subrecord from a sublist field on the parent record.
//  *
//  * @param {string} sublist The sublist internal ID on the parent record
//  * @param {string} fldname The internal ID of the 'subrecord field' on the sublist of the parent record
//  * @param {number} linenum The line number for the sublist field. Note the first line number on a sublist is 1 (not 0).
//  * @return {nlobjSubrecord}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2011.2
//  */
// nlobjRecord.prototype.viewLineItemSubrecord = function (sublist, fldname, linenum) { return null; }

// /**
//  * Returns a nlobjSubrecord object. Use this API to view a subrecord from a body field on the parent record.
//  *
//  * @param {string} fldname The internal ID of the 'subrecord field' on the body of the parent record
//  * @return {nlobjSubrecord}
//  *
//  * @method
//  * @memberOf nlobjRecord
//  *
//  * @since	2011.2
//  */
// nlobjRecord.prototype.viewSubrecord = function (fldname) { return null; }
// /**
//  * Return a new instance of nlobjConfiguration..
//  *
//  * @classDescription Class definition for interacting with setup/configuration pages
//  * @return {nlobjConfiguration}
//  * @constructor
//  *
//  * @since 2009.2
//  */
// function nlobjConfiguration( ) { return null; }

// /**
//  * return the type corresponding to this setup record.
//  *
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjConfiguration
//  *
//  * @since 2009.2
//  */
// nlobjConfiguration.prototype.getType = function( ) { return null; }

// /**
//  * return field metadata for field.
//  *
//  * @param {string} fldnam field name
//  * @return {nlobjField}
//  *
//  * @method
//  * @memberOf nlobjConfiguration
//  *
//  * @since 2009.2
//  */
// nlobjConfiguration.prototype.getField = function(fldnam) { return null; }

// /**
//  * set the value of a field.
//  *
//  * @param {string} name field name
//  * @param {string} value field value
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjConfiguration
//  *
//  * @since 2009.2
//  */
// nlobjConfiguration.prototype.setFieldValue = function( name, value ) { return null; }

// /**
//  * Set the values of a multi-select field.
//  * @restriction only supported for multi-select fields
//  *
//  * @param {string} name field name
//  * @param {string[]} value field values
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjConfiguration
//  *
//  * @since 2009.2
//  */
// nlobjConfiguration.prototype.setFieldValues = function( name, value ) { return null; }

// /**
//  * return the value of a field.
//  *
//  * @param {string} name field name
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjConfiguration
//  *
//  * @since 2009.2
//  */
// nlobjConfiguration.prototype.getFieldValue = function( name ) { return null; }

// /**
//  * return the selected values of a multi-select field as an Array.
//  * @restriction only supported for multi-select fields
//  *
//  * @param {string} name field name
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjConfiguration
//  *
//  * @since 2009.2
//  */
// nlobjConfiguration.prototype.getFieldValues = function( name ) { return null; }

// /**
//  * set the value (via display value) of a field.
//  * @restriction only supported for select fields
//  *
//  * @param {string} name field name
//  * @param {string} text field display text
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjConfiguration
//  *
//  * @since 2009.2
//  */
// nlobjConfiguration.prototype.setFieldText = function( name, text ) { return null; }

// /**
//  * set the values (via display values) of a multi-select field.
//  * @restriction only supported for multi-select fields
//  *
//  * @param {string} 	 name field name
//  * @param {string[]} texts array of field display text values
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjConfiguration
//  *
//  * @since 2009.2
//  */
// nlobjConfiguration.prototype.setFieldTexts = function( name, texts ) { return null; }

// /**
//  * return the text value of a field.
//  * @restriction only supported for select fields
//  *
//  * @param {string} name field name
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjConfiguration
//  *
//  * @since 2009.2
//  */
// nlobjConfiguration.prototype.getFieldText = function( name ) { return null; }

// /**
//  * return the selected text values of a multi-select field as an Array.
//  * @param {string} name field name
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjConfiguration
//  *
//  * @since 2009.2
//  */
// nlobjConfiguration.prototype.getFieldTexts = function( name ) { return null; }

// /**
//  * return an Array of all field names on the record.
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjConfiguration
//  *
//  * @since 2009.2
//  */
// nlobjConfiguration.prototype.getAllFields = function( ) { return null; }

// /**
//  * Return a new instance of nlobjFile used for accessing and manipulating files in the file cabinet.
//  *
//  * @classDescription Encapsulation of files (media items) in the file cabinet.
//  * @return {nlobjFile}
//  * @constructor
//  *
//  * @since 2009.1
//  */
// function nlobjFile( ) { return null; }

// /**
//  * Return the name of the file.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.getName = function( ) { return null; }

// /**
//  * Sets the name of a file.
//  * @param {string} name the name of the file
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.setName = function( name ) { return null; }

// /**
//  * return the internal ID of the folder that this file is in.
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.getFolder = function( ) { return null; }

// /**
//  * sets the internal ID of the folder that this file is in.
//  * @param {number} folder
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.setFolder = function( folder ) { return null; }

// /**
//  * sets the character encoding for the file.
//  * @param {String} encoding
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2010.2
//  */
// nlobjFile.prototype.setEncoding = function( encoding ) { return null; }

// /**
//  * return true if the file is "Available without Login".
//  * @return {boolean}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.isOnline = function( ) { return null; }

// /**
//  * sets the file's "Available without Login" status.
//  * @param {boolean} online
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.setIsOnline = function( online ) { return null; }

// /**
//  * return true if the file is inactive.
//  * @return {boolean}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.isInactive = function( ) { return null; }

// /**
//  * sets the file's inactive status.
//  * @param {boolean} inactive
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.setIsInactive = function( inactive ) { return null; }

// /**
//  * return the file description.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.getDescription = function( ) { return null; }

// /**
//  * sets the file's description.
//  * @param {string} descr the file description
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.setDescription = function( descr ) { return null; }

// /**
//  * Return the id of the file (if stored in the FC).
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.getId = function( ) { return null; }

// /**
//  * Return the size of the file in bytes.
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.getSize = function( ) { return null; }

// /**
//  * Return the URL of the file (if stored in the FC).
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.getURL = function( ) { return null; }

// /**
//  * Return the type of the file.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.getType = function( ) { return null; }

// /**
//  * Return the value (base64 encoded for binary types) of the file.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjFile
//  *
//  * @since 2009.1
//  */
// nlobjFile.prototype.getValue = function( ) { return null; }

// /**
//  * Return a new instance of nlobjSearchFilter filter objects used to define search criteria.
//  *
//  * @classDescription search filter
//  * @constructor
//  * @param {string} name filter name.
//  * @param {string} join internal ID for joined search where this filter is defined
//  * @param {string} operator operator name (i.e. anyOf, contains, lessThan, etc..)
//  * @param {string|string[]} value
//  * @param {string} value2
//  * @return {nlobjSearchFilter}
//  *
//  * @since 2007.0
//  */
// function nlobjSearchFilter( name, join, operator, value, value2 ) { return null; }

// /**
//  * Return the name of this search filter.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchFilter
//  *
//  * @since 2007.0
//  */
// nlobjSearchFilter.prototype.getName = function( ) { return null; }

// /**
//  * Return the join id for this search filter.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchFilter
//  *
//  * @since 2008.1
//  */
// nlobjSearchFilter.prototype.getJoin = function( ) { return null; }

// /**
//  * Return the filter operator used.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchFilter
//  *
//  * @since 2008.2
//  */
// nlobjSearchFilter.prototype.getOperator = function( ) { return null; }

// /**
//  * Returns the formula used for this filter
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchFilter
//  *
//  * @since 2011.1
//  */
// nlobjSearchFilter.prototype.getFormula = function( ) { return null; }

// /**
//  * Returns the summary type used for this filter
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchFilter
//  *
//  * @since 2011.1
//  */
// nlobjSearchFilter.prototype.getSummaryType = function( ) { return null; }

// /**
//  * Sets the formula used for this filter. Name of the filter can either be formulatext, formulanumeric, formuladatetime, formulapercent, or formulacurrency.
//  *
//  * @param {string} formula The formula used for this filter
//  * @return {nlobjSearchFilter}
//  *
//  * @method
//  * @memberOf nlobjSearchFilter
//  *
//  * @since 2011.1
//  */
// nlobjSearchFilter.prototype.setFormula = function(formula) { return null; }

// /**
//  * Sets the summary type used for this filter. Filter name must correspond to a search column if it is to be used as a summary filter.
//  *
//  * @param {string} type The summary type used for this filter
//  * @return {nlobjSearchFilter}
//  *
//  * @method
//  * @memberOf nlobjSearchFilter
//  *
//  * @since 2011.1
//  */
// nlobjSearchFilter.prototype.setSummaryType = function(type) { return null; }

// /**
//  * Return a new instance of nlobjSearchColumn used for column objects used to define search return columns.
//  *
//  * @classDescription search column.
//  * @return {nlobjSearchColumn}
//  * @constructor
//  * @param {string} name column name.
//  * @param {string} join internal ID for joined search where this column is defined
//  * @param {string} summary
//  *
//  * @since 2007.0
//  */
// function nlobjSearchColumn( name, join, summary ) { return null; }

// /**
//  * return the name of this search column.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchColumn
//  * @since 2008.1
//  */
// nlobjSearchColumn.prototype.getName = function( ) { return null; }

// /**
//  * return the join id for this search column.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchColumn
//  * @since 2008.1
//  */
// nlobjSearchColumn.prototype.getJoin = function( ) { return null; }

// /**
//  * return the label of this search column.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchColumn
//  *
//  * @since 2009.1
//  */
// nlobjSearchColumn.prototype.getLabel = function( ) { return null; }

// /**
//  * return the summary type (avg,group,sum,count) of this search column.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchColumn
//  * @since 2008.1
//  */
// nlobjSearchColumn.prototype.getSummary = function( ) { return null; }

// /**
//  * return formula for this search column.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchColumn
//  *
//  * @since 2009.2
//  */
// nlobjSearchColumn.prototype.getFormula = function( ) { return null; }

// /**
//  * return nlobjSearchColumn sorted in either ascending or descending order.
//  *
//  * @param {boolean} sort if not set, defaults to false, which returns column data in ascending order.
//  * @return {nlobjSearchColumn}
//  *
//  * @method
//  * @memberOf nlobjSearchColumn
//  *
//  * @since 2010.1
//  */
// nlobjSearchColumn.prototype.setSort = function( order ) { return null; }

// /**
//  * The function used in this search column as a string
//  *
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchColumn
//  *
//  * @since 2009.1
//  */
// nlobjSearchColumn.prototype.getFunction = function() { return null; }

// /**
//  * Returns the sort direction for this column
//  *
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchColumn
//  *
//  * @since 2011.1
//  */
// nlobjSearchColumn.prototype.getSort = function() { return null; }

// /**
//  * Set the formula used for this column. Name of the column can either be formulatext, formulanumeric, formuladatetime, formulapercent, or formulacurrency.
//  *
//  * @param {string} formula The formula used for this column
//  *
//  * @return {nlobjSearchColumn}
//  *
//  * @method
//  * @memberOf nlobjSearchColumn
//  *
//  * @since 2011.1
//  */
// nlobjSearchColumn.prototype.setFormula = function(formula) { return null; }

// /**
//  * Sets the special function used for this column.
//  *
//  * @param {string} functionid Special function used for this column.
//  *
//  * @return {nlobjSearchColumn}
//  *
//  * @method
//  * @memberOf nlobjSearchColumn
//  *
//  * @since 2011.1
//  */
// nlobjSearchColumn.prototype.setFunction = function(functionid) { return null; }

// /**
//  * Set the label used for this column.
//  *
//  * @param {string} label The label used for this column
//  *
//  * @return {nlobjSearchColumn}
//  *
//  * @method
//  * @memberOf nlobjSearchColumn
//  *
//  * @since 2011.1
//  */
// nlobjSearchColumn.prototype.setLabel = function(label) { return null; }

// /**
//  * Returns the search column for which the minimal or maximal value should be found when returning the nlobjSearchColumn value.
//  *
//  * @param {string} name The name of the search column for which the minimal or maximal value should be found
//  * @param {string} join The join id for this search column
//  *
//  * @return {nlobjSearchColumn}
//  *
//  * @method
//  * @memberOf nlobjSearchColumn
//  *
//  * @since 2012.1
//  */
// nlobjSearchColumn.prototype.setWhenOrderBy = function(name, join) { return null; }

// /**
//  * Return a new instance of nlobjSearchResult used for search result row object.
//  *
//  * @classDescription Class definition for interacting with the results of a search operation
//  * @return {nlobjSearchResult}
//  * @constructor
//  */
// function nlobjSearchResult( ) { return null; }

// /**
//  * return the internalId for the record returned in this row.
//  * @method
//  * @memberOf nlobjSearchResult
//  * @return {number}
//  */
// nlobjSearchResult.prototype.getId = function( ) { return null; }

// /**
//  * return the recordtype for the record returned in this row.
//  * @method
//  * @memberOf nlobjSearchResult
//  * @return {string}
//  */
// nlobjSearchResult.prototype.getRecordType = function( ) { return null; }

// /**
//  * return the value for this nlobjSearchColumn.
//  * @param {nlobjSearchColumn} column search result column
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchResult
//  *
//  * @since 2009.1
//  */
// nlobjSearchResult.prototype.getValue = function( column ) { return null; }

// /**
//  * return the value for a return column specified by name, join ID, and summary type.
//  * @param {string} name the name of the search column
//  * @param {string} join the join ID for the search column
//  * @param {string} summary summary type specified for this column
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchResult
//  *
//  * @since 2008.1
//  */
// nlobjSearchResult.prototype.getValue = function( name, join, summary ) { return null; }

// /**
//  * return the text value for this nlobjSearchColumn if it's a select field.
//  * @param {nlobjSearchColumn} column search result column
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchResult
//  *
//  * @since 2009.1
//  */
// nlobjSearchResult.prototype.getText = function( column ) { return null; }

// /**
//  * return the text value of this return column if it's a select field.
//  * @param {string} name the name of the search column
//  * @param {string} join the join ID for the search column
//  * @param {string} summary summary type specified for this column
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSearchResult
//  *
//  * @since 2008.1
//  */
// nlobjSearchResult.prototype.getText = function( name, join, summary ) { return null; }

// /**
//  * return an array of all nlobjSearchColumn objects returned in this search.
//  * @return {nlobjSearchColumn[]}
//  *
//  * @method
//  * @memberOf nlobjSearchResult
//  *
//  * @since 2009.2
//  */
// nlobjSearchResult.prototype.getAllColumns = function( ) { return null; }

// /**
//  * Return a new instance of nlobjContext used for user and script context information.
//  *
//  * @classDescription Utility class providing information about the current user and the script runtime.
//  * @return {nlobjContext}
//  * @constructor
//  */
// function nlobjContext( ) { return null; }
// /**
//  * return the name of the current user.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2007.0
//  */
// nlobjContext.prototype.getName = function( ) { return null; }

// /**
//  * return the internalId of the current user.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2007.0
//  */
// nlobjContext.prototype.getUser = function( ) { return null; }

// /**
//  * return the internalId of the current user's role.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2007.0
//  */
// nlobjContext.prototype.getRole = function( ) { return null; }

// /**
//  * return the script ID of the current user's role.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2008.2
//  */
// nlobjContext.prototype.getRoleId = function( ) { return null; }

// /**
//  * return the internalId of the current user's center type.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2008.2
//  */
// nlobjContext.prototype.getRoleCenter = function( ) { return null; }

// /**
//  * return the email address of the current user.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2007.0
//  */
// nlobjContext.prototype.getEmail = function( ) { return null; }

// /**
//  * return the account ID of the current user.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2007.0
//  */
// nlobjContext.prototype.getCompany = function( ) { return null; }

// /**
//  * return the internalId of the current user's department.
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2007.0
//  */
// nlobjContext.prototype.getDepartment = function( ) { return null; }

// /**
//  * return the internalId of the current user's location.
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2007.0
//  */
// nlobjContext.prototype.getLocation = function( ) { return null; }

// /**
//  * return the internalId of the current user's subsidiary.
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2007.0
//  */
// nlobjContext.prototype.getSubsidiary = function( ) { return null; }

// /**
//  * return the execution context for this script: webServices|csvImport|client|userInterface|scheduledScript|portlet|suitelet|debugger|custommassupdate
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2007.0
//  */
// nlobjContext.prototype.getExecutionContext = function( ) { return null; }

// /**
//  * return the amount of usage units remaining for this script.
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2007.0
//  */
// nlobjContext.prototype.getRemainingUsage = function( ) { return null; }

// /**
//  * return true if feature is enabled, false otherwise
//  * @param {string} name
//  * @return {boolean}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2009.2
//  */
// nlobjContext.prototype.getFeature = function( name ) { return null; }

// /**
//  * return current user's permission level (0-4) for this permission
//  * @param {string} name
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2009.2
//  */
// nlobjContext.prototype.getPermission = function( name ) { return null; }

// /**
//  * return system or script preference selection for current user
//  * @param {string} name
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2009.2
//  */
// nlobjContext.prototype.getPreference = function( name ) { return null; }

// /**
//  * return value of session object set by script
//  * @param {string} name
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2009.2
//  */
// nlobjContext.prototype.getSessionObject = function( name ) { return null; }

// /**
//  * set the value of a session object using a key.
//  * @param {string} name
//  * @param {string} value
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2009.2
//  */
// nlobjContext.prototype.setSessionObject = function( name, value ) { return null; }

// /**
//  * return the NetSuite version for the current account
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2009.2
//  */
// nlobjContext.prototype.getVersion = function(  ) { return null; }

// /**
//  * return the environment that the script is executing in: SANDBOX, PRODUCTION, BETA, INTERNAL
//  * @since 2008.2
//  */
// nlobjContext.prototype.getEnvironment = function(  ) { return null; }

// /**
//  * return the logging level for the current script execution. Not supported in CLIENT scripts
//  * @since 2008.2
//  */
// nlobjContext.prototype.getLogLevel = function(  ) { return null; }

// /**
//  * return the script ID for the current script
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2009.2
//  */
// nlobjContext.prototype.getScriptId = function(  ) { return null; }

// /**
//  * return the deployment ID for the current script
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2009.2
//  */
// nlobjContext.prototype.getDeploymentId = function(  ) { return null; }

// /**
//  * return the % complete specified for the current scheduled script execution
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2009.2
//  */
// nlobjContext.prototype.getPercentComplete = function(  ) { return null; }

// /**
//  * set the % complete for the current scheduled script execution
//  * @param {number} ct the percentage of records completed
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2009.2
//  */
// nlobjContext.prototype.setPercentComplete = function( pct ) { return null; }

// /**
//  * return a system/script setting. Types are SCRIPT, SESSION, FEATURE, PERMISSION
//  *
//  * @param {string} type
//  * @param {string} name
//  * @since 2007.0
//  * @deprecated
//  */
// nlobjContext.prototype.getSetting = function( type, name ) { return null; }

// /**
//  * set a system/script setting. Only supported type is SESSION
//  *
//  * @param {string} type
//  * @param {string} name
//  * @param {string} value
//  * @since 2007.0
//  * @deprecated
//  */
// nlobjContext.prototype.setSetting = function( type, name, value ) { return null; }

// /**
//  * return an Object containing name/value pairs of color groups to their corresponding RGB hex color based on the currenly logged in user's color them preferences.
//  * @return {object}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @deprecated
//  *
//  * @since 2010.1
//  */
// nlobjContext.prototype.getColorPreferences = function() { return null; }

// /**
//  * Returns the number of scheduled script queues in a given account.
//  *
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjContext
//  *
//  * @since 2013.1
//  */
// nlobjContext.prototype.getQueueCount = function() { return null; }

// /**
//  * Return a new instance of nlobjCredentialBuilder
//  *
//  * @classDescription The nlobjCredentialBuilder object encapsulates a request string that can be passed to nlapiRequestURLWithCredentials(credentials, url, postdata, headers, httpsMethod).
//  * @param {string} request can include an embedded GUID (globally unique string).
//  * @param {string} domain URL???s host name. Host name must exactly match the host name in your URL.
//  * @return {nlobjCredentialBuilder}
//  * @constructor
//  */
// function nlobjCredentialBuilder(request, domain) { return null; }

// /**
//  * Appends a passed in string to an nlobjCredentialBuilder object.
//  *
//  * @param {string} string string to be appended
//  * @return {nlobjCredentialBuilder}
//  *
//  * @method
//  * @memberOf nlobjCredentialBuilder
//  *
//  * @since 2013.2
//  */
// nlobjCredentialBuilder.prototype.append = function(string) { return null; }

// /**
//  * Encodes an nlobjCredentialBuilder object per the base64 scheme.
//  *
//  * @return {nlobjCredentialBuilder}
//  *
//  * @method
//  * @memberOf nlobjCredentialBuilder
//  *
//  * @since 2013.2
//  */
// nlobjCredentialBuilder.prototype.base64 = function() { return null; }

// /**
//  * Hashes an nlobjCredentialBuilder object with the MD5 hash function.
//  *
//  * @return {nlobjCredentialBuilder}
//  *
//  * @method
//  * @memberOf nlobjCredentialBuilder
//  *
//  * @since 2013.2
//  */
// nlobjCredentialBuilder.prototype.md5 = function() { return null; }

// /**
//  * Replaces all instances of string1 with string2.
//  *
//  * @param {string} string1 string to be replaced
//  * @param {string} string2 string to be replaced with
//  * @return {nlobjCredentialBuilder}
//  *
//  * @method
//  * @memberOf nlobjCredentialBuilder
//  *
//  * @since 2013.2
//  */
// nlobjCredentialBuilder.prototype.replace = function() { return null; }

// /**
//  * Hashes an nlobjCredentialBuilder object with the SHA-256 hash function.
//  *
//  * @return {nlobjCredentialBuilder}
//  *
//  * @method
//  * @memberOf nlobjCredentialBuilder
//  *
//  * @since 2013.2
//  */
// nlobjCredentialBuilder.prototype.sha256 = function() { return null; }

// /**
//  * Encodes an nlobjCredentialBuilder object per the UTF-8 scheme.
//  *
//  * @return {nlobjCredentialBuilder}
//  *
//  * @method
//  * @memberOf nlobjCredentialBuilder
//  *
//  * @since 2013.2
//  */
// nlobjCredentialBuilder.prototype.utf8 = function() { return null; }

// /**
//  * Return a new instance of nlobjError used system or user-defined error object.
//  *
//  * @classDescription Encapsulation of errors thrown during script execution.
//  * @return {nlobjError}
//  * @constructor
//  */
// function nlobjError( ) { return null; }

// /**
//  * return the error db ID for this error (if it was an unhandled unexpected error).
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjError
//  *
//  * @since 2008.2
//  */
// nlobjError.prototype.getId = function( ) { return null; }

// /**
//  * return the error code for this system or user-defined error.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjError
//  *
//  * @since 2008.2
//  */
// nlobjError.prototype.getCode = function( ) { return null; }

// /**
//  * return the error description for this error.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjError
//  *
//  * @since 2008.2
//  */
// nlobjError.prototype.getDetails = function( ) { return null; }

// /**
//  * return a stacktrace containing the location of the error.
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjError
//  *
//  * @since 2008.2
//  */
// nlobjError.prototype.getStackTrace = function( ) { return null; }

// /**
//  * return the userevent script name where this error was thrown.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjError
//  *
//  * @since 2008.2
//  */
// nlobjError.prototype.getUserEvent = function( ) { return null; }

// /**
//  * return the internalid of the record if this error was thrown in an aftersubmit script.
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjError
//  *
//  * @since 2008.2
//  */
// nlobjError.prototype.getInternalId = function( ) { return null; }

// /**
//  * Return a new instance of nlobjServerResponse..
//  *
//  * @classDescription Contains the results of a server response to an outbound Http(s) call.
//  * @return {nlobjServerResponse}
//  * @constructor
//  *
//  * @since 2008.1
//  */
// function nlobjServerResponse( ) { return null; }

// /**
//  * return the Content-Type header in response
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjServerResponse
//  *
//  * @since 2008.1
//  */
// nlobjServerResponse.prototype.getContentType = function( ) { return null; }

// /**
//  * return the value of a header returned.
//  * @param {string} name the name of the header to return
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjServerResponse
//  *
//  * @since 2008.1
//  */
// nlobjServerResponse.prototype.getHeader = function(name) { return null; }

// /**
//  * return all the values of a header returned.
//  * @param {string} name the name of the header to return
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjServerResponse
//  *
//  * @since 2008.1
//  */
// nlobjServerResponse.prototype.getHeaders = function(name) { return null; }

// /**
//  * return an Array of all headers returned.
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjServerResponse
//  *
//  * @since 2008.1
//  */
// nlobjServerResponse.prototype.getAllHeaders = function( ) { return null; }

// /**
//  * return the response code returned.
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjServerResponse
//  *
//  * @since 2008.1
//  */
// nlobjServerResponse.prototype.getCode = function( ) { return null; }

// /**
//  * return the response body returned.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjServerResponse
//  *
//  * @since 2008.1
//  */
// nlobjServerResponse.prototype.getBody = function( ) { return null; }

// /**
//  * return the nlobjError thrown via a client call to nlapiRequestURL.
//  * @return {nlobjError}
//  *
//  * @method
//  * @memberOf nlobjServerResponse
//  *
//  * @since 2008.1
//  */
// nlobjServerResponse.prototype.getError = function( ) { return null; }

// /**
//  * @class
//  */
// var nlobjTemplateRenderer = function(){}

// /**
//  * Binds nlobjRecord object to variable name used in template.
//  * @param  {string} variable variable name that represents record
//  * @param  {nlobjRecord} record NetSuite record
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjTemplateRenderer
//  *
//  * @since 2013.1
//  */
// nlobjTemplateRenderer.prototype.addRecord = function( variable, record ) { return null; }

// /**
//  * Binds nlobjSearchResult object to variable name used in template.
//  * @param {string} variable variable name that represents search result
//  * @param {nlobjSearchResult} searchResult NetSuite search result
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjTemplateRenderer
//  *
//  * @since 2013.1
//  */
// nlobjTemplateRenderer.prototype.addSearchResults = function( variable, searchResult ) { return null; }

// /**
//  * Passes in raw string of template to be transformed by FreeMarker.
//  * @param  {string} template raw string of template
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjTemplateRenderer
//  *
//  */
// nlobjTemplateRenderer.prototype.setTemplate = function( template ) { return null; }

// /**
//  * render the output of the template engine into the response
//  * @param {nlobjResponse} nlobjResponse
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjTemplateRenderer
//  */
// nlobjTemplateRenderer.prototype.renderToResponse = function(nlobjResponse) { return null; }

// /**
//  * Returns template content interpreted by FreeMarker as XML string that can be passed to nlapiXMLToPDF(xmlstring) to produce PDF output.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjTemplateRenderer
//  *
//  * @since 2013.1
//  */
// nlobjTemplateRenderer.prototype.renderToString = function() { return null; }



// /**
//  * @class
//  */
// var nlobjEmailMerger = function() { }

//  /**
//  * associate an entity to the merger
//  * @param  {string} entityType type of the entity (customer/contact/partner/vendor/employee)
//  * @param  {number} entityId ID of the entity to be associated with the merger
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjEmailMerger
//  */
// nlobjEmailMerger.prototype.setEntity = function( entityType, entityId ) { return null; }

// /**
//  * associate a second entity (recipient) to the merger
//  * @param  {string} recipientType type of the entity (customer/contact/partner/vendor/employee)
//  * @param  {number} recipientId ID of the entity to be associated with the merger
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjEmailMerger
//  */
// nlobjEmailMerger.prototype.setRecipient = function( recipientType, recipientId ) { return null; }

// /**
//  * associate a support case to the merger
//  * @param  {number} caseId ID of the support case to be associated with the merger
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjEmailMerger
//  */
// nlobjEmailMerger.prototype.setSupportCase = function( caseId ) { return null; }

// /**
//  * associate a transaction to the merger
//  * @param  {number} transactionId ID of the transaction to be associated with the merger
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjEmailMerger
//  */
// nlobjEmailMerger.prototype.setTransaction = function( transactionId ) { return null; }

// /**
//  * associate a custom record to the merger
//  * @param  {string} recordType type of the custom record
//  * @param  {number} recordId ID of the record to be associated with the merger
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjEmailMerger
//  */
// nlobjEmailMerger.prototype.setCustomRecord = function( recordType, recordId ) { return null; }

// /**
//  * perform the merge and return an object containing email subject and body
//  * @governance 20 units
//  * @return {object} pure javascript object with two properties: subject and body
//  *
//  * @method
//  * @memberOf nlobjEmailMerger
//  */
// nlobjEmailMerger.prototype.merge = function( ) { return null; }

// /**
//  * Return a new instance of nlobjResponse used for scripting web responses in Suitelets
//  *
//  * @classDescription Accessor to Http response made available to Suitelets.
//  * @return {nlobjResponse}
//  * @constructor
//  */
// function nlobjResponse( ) { return null; }

// /**
//  * add a value for a response header.
//  * @param  {string} name of header
//  * @param  {string} value for header
//  * @return  {void}
//  *
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2008.2
//  */
// nlobjResponse.prototype.addHeader = function( name, value ) { return null; }

// /**
//  * set the value of a response header.
//  * @param  {string} name of header
//  * @param  {string} value for header
//  * @return  {void}
//  *
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2008.2
//  */
// nlobjResponse.prototype.setHeader = function( name, value ) { return null; }

// /**
//  * return the value of a response header.
//  * @param  {string} name of header
//  * @return  {string}
//  *
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2008.2
//  */
// nlobjResponse.prototype.getHeader = function( ) { return null; }

// /**
//  * return an Array of all response header values for a header
//  * @param  {string} name of header
//  * @return  {string[]}
//  *
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2008.2
//  */
// nlobjResponse.prototype.getHeaders = function( name ) { return null; }

// /**
//  * return an Array of all response headers
//  * @return  {object}
//  *
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2008.2
//  */
// nlobjResponse.prototype.getAllHeaders = function( ) { return null; }

// /**
//  * sets the content type for the response (and an optional filename for binary output).
//  *
//  * @param {string} type the file type i.e. plainText, word, pdf, htmldoc (see list of media item types)
//  * @param {string} filename the file name
//  * @param {string} disposition Content Disposition used for streaming attachments: inline|attachment
//  * @return {void}
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2008.2
//  */
// nlobjResponse.prototype.setContentType = function( type, filename, disposition ) { return null; }

// /**
//  * sets the redirect URL for the response. all URLs must be internal unless the Suitelet is being executed in an "Available without Login" context
//  *  at which point it can use type "external" to specify an external url via the subtype arg
//  *
//  * @param {string} type type specifier for URL: suitelet|tasklink|record|mediaitem|external
//  * @param {string} subtype subtype specifier for URL (corresponding to type): scriptid|taskid|recordtype|mediaid|url
//  * @param {string} [id] internal ID specifier (sub-subtype corresponding to type): deploymentid|n/a|recordid|n/a
//  * @param {string} [pagemode] string specifier used to configure page (suitelet: external|numberernal, tasklink|record: edit|view)
//  * @param {object} [parameters] Object used to specify additional URL parameters as name/value pairs
//  * @return {void}
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2008.2
//  */
// nlobjResponse.prototype.sendRedirect = function( type, subtype, id, pagemode, parameters ) { return null; }

// /**
//  * write information (text/xml/html) to the response.
//  *
//  * @param {string} output
//  * @return {void}
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2008.2
//  */
// nlobjResponse.prototype.write = function( output ) { return null; }

// /**
//  * write line information (text/xml/html) to the response.
//  *
//  * @param {string} output
//  * @return {void}
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2008.2
//  */
// nlobjResponse.prototype.writeLine = function( output ) { return null; }

// /**
//  * write a UI object page.
//  *
//  * @param {object} pageobject page UI object: nlobjList|nlobjAssistant|nlobjForm|nlobjDashboard
//  * @return {void}
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2008.2
//  */
// nlobjResponse.prototype.writePage = function( pageobject ) { return null; }

// /**
//  * sets the character encoding for the response.
//  * @param {String} encoding
//  * @return {void}
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2012.2
//  */
// nlobjResponse.prototype.setEncoding = function( encoding ) { return null; }

// /**
//  * Returns the body returned by the server. Only available in the return value of a call to nlapiRequestURL(url, postdata, headers, callback, httpMethod).
//  * @return {string}
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2012.2
//  */
// nlobjResponse.prototype.getBody = function() { return null; }

// /**
//  * Returns the response code returned by the server. Only available in the return value of a call to nlapiRequestURL(url, postdata, headers, callback, httpMethod).
//  * @return {string}
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2012.2
//  */
// nlobjResponse.prototype.getCode = function() { return null; }

// /**
//  * Returns the nlobjError thrown during request. Only available in the return value of call to nlapiRequestURL in Client SuiteScript.
//  * @return {nlobjError}
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2012.2
//  */
// nlobjResponse.prototype.getError = function() { return null; }

// /**
//  * Generates, and renders, a PDF directly to a response. Use renderPDF to generate PDFs without first importing a file to the file cabinet. This method is useful if your script does not have NetSuite file cabinet permissions.
//  * @param {string} xmlString Content of your PDF, passed to renderPDF as a string.
//  * @return {void}
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2012.2
//  */
// nlobjResponse.prototype.renderPDF = function(xmlString) { return null; }

// /**
//  * Sets CDN caching for a shorter period of time or a longer period of time.
//  * @param {string} type Constant value to represent the caching duration: CACHE_DURATION_UNIQUE, CACHE_DURATION_SHORT, CACHE_DURATION_MEDIUM, CACHE_DURATION_LONG
//  * @return {void}
//  * @method
//  * @memberOf nlobjResponse
//  *
//  * @since 2012.2
//  */
// nlobjResponse.prototype.setCDNCacheable = function(type) { return null; }



// /**
//  * Return a new instance of nlobjRequest used for scripting web requests in Suitelets
//  *
//  * @classDescription Accessor to Http request data made available to Suitelets
//  * @return {nlobjRequest}
//  * @constructor
//  */
// function nlobjRequest( ) { return null; }

// /**
//  * return the value of a request parameter.
//  *
//  * @param {string} name parameter name
//  * @return {string}
//  * @method
//  * @memberOf nlobjRequest
//  *
//  * @since 2008.2
//  */
// nlobjRequest.prototype.getParameter = function( name ) { return null; }

// /**
//  * return the values of a request parameter as an Array.
//  *
//  * @param {string} name parameter name
//  * @return {string[]}
//  * @method
//  * @memberOf nlobjRequest
//  *
//  * @since 2008.2
//  */
// nlobjRequest.prototype.getParameterValues = function( name ) { return null; }

// /**
//  * return an Object containing all the request parameters and their values.
//  * @return {object}
//  * @method
//  * @memberOf nlobjRequest
//  *
//  * @since 2008.2
//  */
// nlobjRequest.prototype.getAllParameters = function( ) { return null; }

// /**
//  * return the value of a sublist value.
//  * @param {string} 	group sublist name
//  * @param {string} 	name  sublist field name
//  * @param {number} 	line  sublist line number
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRequest
//  *
//  * @since 2008.2
//  */
// nlobjRequest.prototype.getLineItemValue = function( group, name, line ) { return null; }

// /**
//  * return the number of lines in a sublist.
//  * @param {string} group sublist name
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjRequest
//  *
//  * @since 2008.2
//  */
// nlobjRequest.prototype.getLineItemCount = function( group ) { return null; }

// /**
//  * return the value of a request header.
//  * @param {string} name
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRequest
//  *
//  * @since 2008.2
//  */
// nlobjRequest.prototype.getHeader = function( name ) { return null; }

// /**
//  * return an Object containing all the request headers and their values.
//  * @return {object}
//  *
//  * @method
//  * @memberOf nlobjRequest
//  *
//  * @since 2008.2
//  */
// nlobjRequest.prototype.getAllHeaders = function( ) { return null; }

// /**
//  * return the value of an uploaded file.
//  * @param {string} id file field name
//  * @return {nlobjFile}
//  *
//  * @method
//  * @memberOf nlobjRequest
//  *
//  * @since 2009.1
//  */
// nlobjRequest.prototype.getFile = function(id) { return null; }

// /**
//  * return an Object containing field names to file objects for all uploaded files.
//  * @return {object}
//  *
//  * @method
//  * @memberOf nlobjRequest
//  *
//  * @since 2009.1
//  */
// nlobjRequest.prototype.getAllFiles = function( ) { return null; }

// /**
//  * return the body of the POST request
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRequest
//  * @since 2008.1
//  */
// nlobjRequest.prototype.getBody = function( ) { return null; }

// /**
//  * return the URL of the request
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRequest
//  * @since 2008.1
//  */
// nlobjRequest.prototype.getURL = function( ) { return null; }

// /**
//  * return the METHOD of the request
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjRequest
//  * @since 2008.1
//  */
// nlobjRequest.prototype.getMethod = function( ) { return null; }

// /**
//  * return an Object containing field names to file objects for all uploaded files.
//  * @return {object}
//  *
//  * @method
//  * @memberOf nlobjRequest
//  *
//  * @since 2009.1
//  */
// nlobjRequest.prototype.getAllFiles = function( ) { return null; }

// /**
//  * Return a new instance of nlobjPortlet used for scriptable dashboard portlet.
//  *
//  * @classDescription UI Object used for building portlets that are displayed on dashboard pages
//  * @return {nlobjPortlet}
//  * @constructor
//  */
// function nlobjPortlet( ) { return null; }

// /**
//  * set the portlet title.
//  *
//  * @param {string} title
//  * @since 2008.2
//  */
// nlobjPortlet.prototype.setTitle = function( title ) { return null; }

// /**
//  * set the entire contents of the HTML portlet (will be placed inside a <TD>...</TD>).
//  *
//  * @param {string} html
//  * @since 2008.2
//  */
// nlobjPortlet.prototype.setHtml = function( html ) { return null; }

// /**
//  * add a column (nlobjColumn) to this LIST portlet and return it.
//  *
//  * @param {string} name	column name
//  * @param {string} type column type
//  * @param {string} label column label
//  * @param {string} [align] column alignment
//  * @since 2008.2
//  */
// nlobjPortlet.prototype.addColumn = function( name, type, label, align ) { return null; }

// /**
//  * add an Edit column (nlobjColumn) to the left of the column specified (supported on LIST portlets only).
//  *
//  * @param {nlobjColumn} column
//  * @param {boolean} showView should Edit|View instead of Edit link
//  * @param {string} 	[showHref] column that evaluates to T or F that determines whether to disable the edit|view link per-row.
//  * @return {nlobjColumn}
//  *
//  * @since 2008.2
//  */
// nlobjPortlet.prototype.addEditColumn = function( column, showView, showHref ) { return null; }

// /**
//  * add a row (nlobjSearchResult or Array of name-value pairs) to this LIST portlet.
//  *
//  * @param {string[]|nlobjSearchResult} row
//  * @since 2008.2
//  */
// nlobjPortlet.prototype.addRow = function( row ) { return null; }

// /**
//  * add multiple rows (Array of nlobjSearchResults or name-value pair Arrays) to this LIST portlet.
//  *
//  * @param {string[][]|nlobjSearchResult[]} rows
//  * @since 2008.2
//  */
// nlobjPortlet.prototype.addRows = function( rows ) { return null; }

// /**
//  * add a field (nlobjField) to this FORM portlet and return it.
//  *
//  * @param {string} name field name
//  * @param {string} type field type
//  * @param {string} [label] field label
//  * @param {string|number} [source] script ID or internal ID for source list (select and multiselects only) -or- radio value for radio fields
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjPortlet.prototype.addField = function( name,type,label,source ) { return null; }

// /**
//  * add a FORM submit button to this FORM portlet.
//  *
//  * @param {string} url	URL that this form portlet will POST to
//  * @param {string} [label] label for submit button (defaults to Save)
//  * @param {string} [target] The target attribute of the portlet's FORM element
//  * @since 2008.2
//  */
// nlobjPortlet.prototype.setSubmitButton = function( url, label, target ) { return null; }

// /**
//  * add a line (containing text or simple HTML) with optional indenting and URL to this LINKS portlet.
//  *
//  * @param {string} 	text data to output to line
//  * @param {string} 	[url] URL if this line should be clickable (if NULL then line will not be clickable)
//  * @param {number} 	indent # of indents to insert before text
//  * @since 2008.2
//  */
// nlobjPortlet.prototype.addLine = function( text, url, indent ) { return null; }

// /**
//  * Sets the regular interval when a FORM portlet automatically refreshes itself.
//  *
//  * @restriction This API is only available if the portlet type is FORM.
//  *
//  * @param {number} n   Number of seconds. In production mode, this value must be at least 60 seconds. An error is raised if this value is less than zero, and in production if it is less than 60.
//  * @return {void}
//  *
//  * @since 2011.1
//  */
// nlobjPortlet.prototype.setRefreshInterval = function( n ) { return null; }

// /**
//  * Sets the client-side script for a FORM portlet. Setting another script implicitly removes the previous script.
//  *
//  * @param {int | string} scriptid   The script internalId or custom scriptId of a record-level client script.
//  * @return {void}
//  *
//  * @since 2011.1
//  */
// nlobjPortlet.prototype.setScript = function( scruptid ) { return null; }

// /**
//  * Return a new instance of nlobjList used for scriptable list page.
//  *
//  * @classDescription UI Object page type used for building lists
//  * @return {nlobjList}
//  * @constructor
//  */
// function nlobjList( ) { return null; }

// /**
//  * set the page title.
//  *
//  * @param {string} title
//  * @since 2008.2
//  */
// nlobjList.prototype.setTitle = function( title ) { return null; }

// /**
//  * set the global style for this list: grid|report|plain|normal.
//  *
//  * @param {string} style overall style used to render list
//  * @since 2008.2
//  */
// nlobjList.prototype.setStyle = function( style ) { return null; }

// /**
//  * set the Client SuiteScript used for this page.
//  *
//  * @param {string|number} script script ID or internal ID for global client script used to enable Client SuiteScript on page
//  * @since 2008.2
//  */
// nlobjList.prototype.setScript = function( script ) { return null; }

// /**
//  * add a column (nlobjColumn) to this list and return it.
//  *
//  * @param {string} name column name
//  * @param {string} type column type
//  * @param {string} label column label
//  * @param {string} [align] column alignment
//  * @return {nlobjColumn}
//  *
//  * @since 2008.2
//  */
// nlobjList.prototype.addColumn = function( name, type, label, align ) { return null; }

// /**
//  * add an Edit column (nlobjColumn) to the left of the column specified.
//  *
//  * @param {nlobjColumn} column
//  * @param {boolean} showView should Edit|View instead of Edit link
//  * @param {string} 	[showHref] column that evaluates to T or F that determines whether to disable the edit|view link per-row.
//  * @return {nlobjColumn}
//  *
//  * @since 2008.2
//  */
// nlobjList.prototype.addEditColumn = function( column, showView, showHref ) { return null; }

// /**
//  * add a row (Array of name-value pairs or nlobjSearchResult) to this portlet.
//  *
//  * @param {string[]|nlobjSearchResult} row data used to add a single row
//  * @since 2008.2
//  */
// nlobjList.prototype.addRow = function( row ) { return null; }

// /**
//  * add multiple rows (Array of nlobjSearchResults or name-value pair Arrays) to this portlet.
//  *
//  * @param {string[][]|nlobjSearchResult[]} rows data used to add multiple rows
//  * @since 2008.2
//  */
// nlobjList.prototype.addRows = function( rows ) { return null; }

// /**
//  * add a button (nlobjButton) to the footer of this page.
//  *
//  * @param {string} name button name
//  * @param {string} label button label
//  * @param {string} script button script (function name)
//  * @since 2008.2
//  */
// nlobjList.prototype.addButton = function( name, label, script ) { return null; }

// /**
//  * add a navigation cross-link to the page.
//  *
//  * @param {string} type	page link type: crosslink|breadcrumb
//  * @param {string} title page link title
//  * @param {string} url URL for page link
//  * @since 2008.2
//  */
// nlobjList.prototype.addPageLink = function( type, title, url ) { return null; }

// /**
//  * Return a new instance of nlobjForm used for scriptable form page.
//  *
//  * @classDescription UI Object page type used for building basic data entry forms.
//  * @return {nlobjForm}
//  * @constructor
//  */
// function nlobjForm( ) { return null; }

// /**
//  * set the page title.
//  *
//  * @param {string} title
//  * @since 2008.2
//  */
// nlobjForm.prototype.setTitle = function( title ) { return null; }

// /**
//  * set the Client Script definition used for this page.
//  *
//  * @param {string|number} script script ID or internal ID for global client script used to enable Client SuiteScript on page
//  * @since 2008.2
//  */
// nlobjForm.prototype.setScript = function( script ) { return null; }

// /**
//  * set the values for all the fields on this form.
//  *
//  * @param {object} values Object containing field name/value pairs
//  * @since 2008.2
//  */
// nlobjForm.prototype.setFieldValues = function( values ) { return null; }

// /**
//  * add a navigation cross-link to the page.
//  *
//  * @param {string} type	page link type: crosslink|breadcrumb
//  * @param {string} title page link title
//  * @param {string} url URL for page link
//  * @since 2008.2
//  */
// nlobjForm.prototype.addPageLink = function( type, title, url ) { return null; }

// /**
//  * add a button to this form.
//  *
//  * @param {string} name button name
//  * @param {string} label button label
//  * @param {string} script button script (function name)
//  * @return {nlobjButton}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.addButton = function( name, label, script ) { return null; }

// /**
//  * get a button from this form by name.
//  * @param {string} name
//  * @return {nlobjButton}
//  *
//  * @method
//  * @memberOf nlobjForm
//  *
//  * @since 2009.2                                                                           add
//  */
// nlobjForm.prototype.getButton = function( name ) { return null; }

// /**
//  * add a reset button to this form.
//  *
//  * @param {string} [label] label for this button. defaults to "Reset"
//  * @return {nlobjButton}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.addResetButton = function( label ) { return null; }

// /**
//  * add a submit button to this form.
//  *
//  * @param {string} [label] label for this submit button. defaults to "Save"
//  * @return {nlobjButton}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.addSubmitButton = function( label ) { return null; }

// /**
//  * add a tab (nlobjTab) to this form and return it.
//  *
//  * @param {string} name tab name
//  * @param {string} label tab label
//  * @return {nlobjTab}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.addTab = function( name, label ) { return null; }

// /**
//  * add a field (nlobjField) to this form and return it.
//  *
//  * @param {string} name field name
//  * @param {string} type field type
//  * @param {string} [label] field label
//  * @param {string|number} [source] script ID or internal ID for source list (select and multiselects only) -or- radio value for radio fields
//  * @param {string} [tab] tab name that this field will live on. If empty then the field is added to the main section of the form (immediately below the title bar)
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.addField = function( name,type,label,sourceOrRadio,tab ) { return null; }

// /**
//  * Adds a field that lets you store credentials in NetSuite to be used when invoking services provided by third parties.
//  *
//  * @param {string} id The internal ID of the credential field.
//  * @param {string} label The UI label for the credential field.
//  * @param {string} [website] The domain the credentials can be sent to.
//  * @param {string} [scriptId] The scriptId of the script that is allowed to use this credential field.
//  * @param {string} [value] If you choose, you can set an initial value for this field. This value is the handle to the credentials.
//  * @param {boolean} [entityMatch] Controls whether use of nlapiRequestUrlWithCredentials with this credential is restricted to the same entity that originally entered the credential.
//  * @param {string} [tab] The tab parameter can be used to specify either a tab or a field group (if you have added nlobjFieldGroup objects to your form).
//  * @return {nlobjField}
//  *
//  * @since 2012.1
//  */
// nlobjForm.prototype.addCredentialField = function( id,label,website,scriptId,value,entityMatch,tab ) { return null; }

// /**
//  * add a subtab (nlobjTab) to this form and return it.
//  *
//  * @param {string} name subtab name
//  * @param {string} label subtab label
//  * @param {string} [tab] parent tab that this subtab lives on. If empty, it is added to the main tab.
//  * @return {nlobjTab}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.addSubTab = function( name,label,tab ) { return null; }

// /**
//  * add a sublist (nlobjSubList) to this form and return it.
//  *
//  * @param {string} name sublist name
//  * @param {string} type sublist type: inlineeditor|editor|list|staticlist
//  * @param {string} label sublist label
//  * @param {string} [tab] parent tab that this sublist lives on. If empty, it is added to the main tab
//  * @return {nlobjSubList}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.addSubList = function( name,type,label,tab ) { return null; }

// /**
//  * insert a tab (nlobjTab) before another tab (name).
//  *
//  * @param {nlobjTab} 		tab the tab object to insert
//  * @param {string} 		nexttab the name of the tab before which to insert this tab
//  * @return {nlobjTab}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.insertTab = function( tab, nexttab ) { return null; }

// /**
//  * insert a field (nlobjField) before another field (name).
//  *
//  * @param {nlobjField} 	field the field object to insert
//  * @param {string} 		nextfld the name of the field before which to insert this field
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.insertField = function( field, nextfld ) { return null; }

// /**
//  * insert a subtab (nlobjTab) before another subtab or sublist (name).
//  *
//  * @param {nlobjTab}	subtab the subtab object to insert
//  * @param {string} 	nextsubtab the name of the subtab before which to insert this subtab
//  * @return {nlobjTab}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.insertSubTab = function( subtab, nextsubtab ) { return null; }

// /**
//  * insert a sublist (nlobjSubList) before another subtab or sublist (name).
//  *
//  * @param {nlobjSubList}	sublist the sublist object to insert
//  * @param {string} 		nextsublist the name of the sublist before which to insert this sublist
//  * @return {nlobjSubList}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.insertSubList = function( sublist, nextsublist ) { return null; }

// /**
//  * return a tab (nlobjTab) on this form.
//  *
//  * @param {string} name tab name
//  * @return {nlobjTab}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.getTab = function( name ) { return null; }

// /**
//  * return a field (nlobjField) on this form.
//  *
//  * @param {string} name field name
//  * @param {string} [radio] if this is a radio field, specify which radio field to return based on radio value
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.getField = function( name, radio ) { return null; }

// /**
//  * return a subtab (nlobjTab) on this form.
//  *
//  * @param {string} name subtab name
//  * @return {nlobjTab}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.getSubTab = function( name ) { return null; }

// /**
//  * return a sublist (nlobjSubList) on this form.
//  *
//  * @param {string} name sublist name
//  * @return {nlobjSubList}
//  *
//  * @since 2008.2
//  */
// nlobjForm.prototype.getSubList = function( name ) { return null; }

// /**
//  * add a field group to the form.
//  * @param {string} name field group name
//  * @param {string} label field group label
//  * @param tab
//  * @return {nlobjFieldGroup}
//  *
//  * @method
//  * @memberOf nlobjForm
//  *
//  * @since 2011.1
//  */
// nlobjForm.prototype.addFieldGroup = function( name, label, tab ) { return null; }

// /**
//  * get a list of all tabs.
//  * @return an array with names of all tabs
//  *
//  * @method
//  * @memberOf nlobjForm
//  *
//  * @since 2012.2
//  */
// nlobjForm.prototype.getTabs = function( ) { return null; }

// /**
//  * Removes an nlobjButton object. This method can be used on custom buttons and certain built-in NetSuite buttons.
//  * @param {string} name
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjForm
//  *
//  * @since 2012.2
//  */
// nlobjForm.prototype.removeButton = function(name) { return null; }
// /**
//  * Return a new instance of nlobjAssistant.
//  *
//  * @classDescription UI Object page type used to build multi-step "assistant" pages to simplify complex workflows. All data and state for an assistant is tracked automatically
//  * throughout the user's session up until completion of the assistant.
//  *
//  * @return {nlobjAssistant}
//  * @constructor
//  *
//  * @since 2009.2
//  */
// function nlobjAssistant( ) { return null; }
// /**
//  * set the page title.
//  * @param {string} title
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.setTitle = function( title ) { return null; }

// /**
//  * set the script ID for Client Script used for this form.
//  * @param {string|number} script script ID or internal ID for global client script used to enable Client SuiteScript on page
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.setScript = function( script ) { return null; }

// /**
//  * set the splash screen used for this page.
//  * @param {string} title splash portlet title
//  * @param {string} text1 splash portlet content (left side)
//  * @param {string} [text2] splash portlet content (right side)
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.setSplash = function( title, text1, text2 ) { return null; }

// /**
//  * show/hide shortcut link. Always hidden on external pages
//  * @param {boolean} show enable/disable "Add To Shortcut" link on this page
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.setShortcut = function(show) { return null; }

// /**
//  * set the values for all the fields on this page.
//  * @param {object} values Object of field name/value pairs used to set all fields on page
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.setFieldValues = function( values ) { return null; }

// /**
//  * if ordered, steps are show on left and must be completed sequentially, otherwise steps are shown on top and can be done in any order
//  * @param {boolean} ordered	If true (default assistant behavior) then a navigation order thru the steps/pages will be imposed on the user. Otherwise the user
//  * 							will be allowed to navigate across steps/pages in any order they choose.
//  * @return  {void}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.setOrdered = function(ordered) { return null; }

// /**
//  * if numbered, step numbers are displayed next to the step's label in the navigation area
//  * @param {boolean} numbered	If true (default assistant behavior) step numbers will be displayed next to the step label
//  * @return  {void}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.setNumbered = function(numbered) { return null; }

// /**
//  * return true if all the steps have been completed.
//  * @return {boolean}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.isFinished = function( ) { return null; }

// /**
//  * mark assistant page as completed and optionally set the rich text to display on completed page.
//  * @param {string} html completion message (rich text) to display on the "Finish" page
//  * @return  {void}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.setFinished = function( html ) { return null; }

// /**
//  * return true if the assistant has an error message to display for the current step.
//  * @return {boolean}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.hasError = function( ) { return null; }

// /**
//  * set the error message for the currrent step.
//  * @param {string} html error message (rich text) to display on the page to the user
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.setError = function( html ) { return null; }

// /**
//  * mark a step as current. It will be highlighted accordingly when the page is displayed
//  * @param {nlobjAssistantStep} step assistant step object representing the current step that the user is on.
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.setCurrentStep = function( step ) { return null; }

// /**
//  * add a step to the assistant.
//  * @param {string} name the name of the step
//  * @param {string} label label used for this step
//  * @return {nlobjAssistantStep}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.addStep = function( name, label ) { return null; }

// /**
//  * add a field to this page and return it.
//  * @param {string} name field name
//  * @param {string} type field type
//  * @param {string} [label] field label
//  * @param {string|number} [source] script ID or internal ID for source list (select and multiselects only) -or- radio value for radio fields
//  * @param {string} [group] group name that this field will live on. If empty then the field is added to the main section of the page
//  * @return {nlobjField}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.addField = function( name,type,label,source, group ) { return null; }

// /**
//  * add a sublist to this page and return it. For now only sublists of type inlineeditor are supported
//  * @param {string} name sublist name
//  * @param {string} type sublist type (inlineeditor only for now)
//  * @param {string} label sublist label
//  * @return {nlobjSubList}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.addSubList = function( name,type,label ) { return null; }

// /**
//  * add a field group to the page.
//  * @param {string} name field group name
//  * @param {string} label field group label
//  * @return {nlobjFieldGroup}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.addFieldGroup = function( name, label ) { return null; }

// /**
//  * return an assistant step on this page.
//  * @param {string} name step name
//  * @return {nlobjAssistantStep}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getStep = function( name ) { return null; }

// /**
//  * return a field on this page.
//  * @param {string} name field name
//  * @return {nlobjField}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getField = function( name ) { return null; }

// /**
//  * return a sublist on this page.
//  * @param {string} name sublist name
//  * @return {nlobjSubList}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getSubList = function( name ) { return null; }

// /**
//  * return a field group on this page.
//  * @param {string} name field group name
//  * @return {nlobjFieldGroup}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getFieldGroup = function( name ) { return null; }

// /**
//  * return an array of all the assistant steps for this assistant.
//  * @return {nlobjAssistantStep[]}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getAllSteps = function( ) { return null; }

// /**
//  * return an array of the names of all fields on this page.
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getAllFields = function( ) { return null; }

// /**
//  *  return an array of the names of all sublists on this page .
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getAllSubLists = function( ) { return null; }

// /**
//  * return an array of the names of all field groups on this page.
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getAllFieldGroups = function( ) { return null; }

// /**
//  * return the last submitted action by the user: next|back|cancel|finish|jump
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getLastAction = function() { return null; }

// /**
//  * return step from which the last submitted action came from
//  * @return {nlobjAssistantStep}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getLastStep = function() { return null; }

// /**
//  * return the next logical step corresponding to the user's last submitted action. You should only call this after
//  * you have successfully captured all the information from the last step and are ready to move on to the next step. You
//  * would use the return value to set the current step prior to continuing.
//  *
//  * @return {nlobjAssistantStep}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getNextStep = function() { return null; }

// /**
//  * return current step set via nlobjAssistant.setCurrentStep(step)
//  * @return {nlobjAssistantStep}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getCurrentStep = function() { return null; }

// /**
//  * return the total number of steps in the assistant
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.getStepCount = function() { return null; }

// /**
//  * redirect the user following a user submit operation. Use this to automatically redirect the user to the next logical step.
//  * @param {nlobjResponse} response the response object used to communicate back to the user's client
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjAssistant
//  *
//  * @since 2009.2
//  */
// nlobjAssistant.prototype.sendRedirect = function(response) { return null; }

// /**
//  * Return a new instance of nlobjField used for scriptable form/sublist field.
//  * This object is READ-ONLY except for scripted fields created via the UI Object API using Suitelets or beforeLoad user events
//  *
//  * @classDescription Core descriptor for fields used to define records and also used to build pages and portlets.
//  * @return {nlobjField}
//  * @constructor
//  */
// function nlobjField( ) { return null; }

// /**
//  *  return field name.
//  *  @return {string}
//  *
//  * @method
//  * @memberOf nlobjField
//  *
//  * @since 2009.2
//  */
// nlobjField.prototype.getName = function( ) { return null; }

// /**
//  * return field label.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjField
//  *
//  * @since 2009.2
//  */
// nlobjField.prototype.getLabel = function( ) { return null; }

// /**
//  * return field type.
//  *  @return {string}
//  *
//  * @method
//  * @memberOf nlobjField
//  *
//  * @since 2009.2
//  */
// nlobjField.prototype.getType = function( ) { return null; }

// /**
//  * set the label for this field.
//  * This method is only supported on scripted fields via the UI Object API
//  *
//  * @param {string} label
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjField.prototype.setLabel = function( label ) { return null; }

// /**
//  * set the alias used to set the value for this field. Defaults to field name.
//  * This method is only supported on scripted fields via the UI Object API
//  *
//  * @param {string} alias column used to populate the field (mostly relevant when populating sublist fields)
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjField.prototype.setAlias = function( alias ) { return null; }

// /**
//  * set the default value for this field.
//  * This method is only supported on scripted fields via the UI Object API
//  *
//  * @param {string} value
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjField.prototype.setDefaultValue = function( value ) { return null; }

// /**
//  * make this field mandatory.
//  * This method is only supported on scripted fields via the UI Object API
//  *
//  * @param {boolean} mandatory if true then field becomes mandatory
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjField.prototype.setMandatory = function( mandatory ) { return null; }

// /**
//  * set the maxlength for this field (only valid for certain field types).
//  *  This method is only supported on scripted fields via the UI Object API
//  *
//  * @param {number} maxlength maximum length for this field
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjField.prototype.setMaxLength = function( maxlength ) { return null; }

// /**
//  * set the display type for this field.
//  * This method is only supported on scripted fields via the UI Object API
//  *
//  * @param {string} type display type: inline|normal|hidden|disabled|readonly|entry
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjField.prototype.setDisplayType = function( type ) { return null; }

// /**
//  * set the break type (startcol|startrow|none) for this field. startrow is only used for fields with a layout type of outside
//  * This method is only supported on scripted fields via the UI Object API
//  *
//  * @param {string} breaktype break type used to add a break in flow layout for this field: startcol|startrow|none
//  * @return {nlobjField}
//  *
//  * @method
//  * @memberOf nlobjField
//  *
//  * @since 2009.2
//  */
// nlobjField.prototype.setBreakType = function( breaktype ) { return null; }


// /**
//  * set the layout type and optionally the break type.
//  * This method is only supported on scripted fields via the UI Object API
//  *
//  * @param {string} type layout type: outside|startrow|midrow|endrow|normal
//  * @param {string} [breaktype] break type: startcol|startrow|none
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjField.prototype.setLayoutType = function( type, breaktype ) { return null; }

// /**
//  * set the text that gets displayed in lieu of the field value for URL fields.
//  *
//  * @param {string} text user-friendly display value in lieu of URL
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjField.prototype.setLinkText = function( text ) { return null; }

// /**
//  * set the width and height for this field.
//  * This method is only supported on scripted fields via the UI Object API
//  *
//  * @param {number} width
//  * @param {number} height
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjField.prototype.setDisplaySize = function( width, height ) { return null; }

// /**
//  * set the amount of emppty vertical space (rows) between this field and the previous field.
//  * This method is only supported on scripted fields via the UI Object API
//  *
//  * @param {number} padding # of empty rows to display above field
//  * @return {nlobjField}
//  *
//  * @since 2008.2
//  */
// nlobjField.prototype.setPadding = function( padding ) { return null; }

// /**
//  * set help text for this field. If inline is set on assistant pages, help is displayed inline below field
//  * This method is only supported on scripted fields via the UI Object API
//  *
//  * @param {string} help	field level help content (rich text) for field
//  * @param {string} [inline] if true then in addition to the popup field help, the help will also be displayed inline below field (supported on assistant pages only)
//  * @return {nlobjField}
//  *
//  * @method
//  * @memberOf nlobjField
//  *
//  * @since 2009.2
//  */
// nlobjField.prototype.setHelpText = function( help, inline ) { return null; }

// /**
//  * add a select option to this field (valid for select/multiselect fields).
//  * This method is only supported on scripted fields via the UI Object API
//  *
//  * @param {string} value internal ID for this select option
//  * @param {string} text display value for this select option
//  * @param {boolean} [selected] if true then this select option will be selected by default
//  * @since 2008.2
//  */
// nlobjField.prototype.addSelectOption = function( value, text, selected ) { return null; }

// /**
//  *
//  * This method can only be used in server contexts against a record object. Also note that a call to this method may return different results for the same field for different roles.
//  *
//  * @param {string} [filter] A search string to filter the select options that are returned.
//  * @param {string} [filteroperator] Supported operators are contains | is | startswith. If not specified, defaults to the contains operator.
//  * @since 2009.2
//  */
// nlobjField.prototype.getSelectOptions = function(filter, filteroperator) { return null; }

// /**
//  * Return a new instance of nlobjSubList used for scriptable sublist (sublist).
//  * This object is READ-ONLY except for instances created via the UI Object API using Suitelets or beforeLoad user events.
//  *
//  * @classDescription high level container for defining sublist (many to one) relationships on a record or multi-line data entry UIs on pages.
//  * @return {nlobjSubList}
//  * @constructor
//  */
// function nlobjSubList( ) { return null; }

// /**
//  * set the label for this sublist.
//  * This method is only supported on sublists via the UI Object API
//  *
//  * @param {string} label
//  * @since 2008.2
//  */
// nlobjSubList.prototype.setLabel = function( label ) { return null; }

// /**
//  * set helper text for this sublist.
//  * This method is only supported on sublists via the UI Object API
//  *
//  * @param {string} help
//  * @since 2008.2
//  */
// nlobjSubList.prototype.setHelpText = function( help ) { return null; }

// /**
//  * set the displaytype for this sublist: hidden|normal.
//  * This method is only supported on scripted or staticlist sublists via the UI Object API
//  *
//  * @param {string} type
//  * @since 2008.2
//  */
// nlobjSubList.prototype.setDisplayType = function( type ) { return null; }

// /**
//  * set the value of a cell in this sublist.
//  *
//  * @param {string} 	field sublist field name
//  * @param {number} 	line  line number (1-based)
//  * @param {string} 	value sublist value
//  *
//  * @method
//  * @memberOf nlobjSubList
//  *
//  * @since 2008.2
//  */
// nlobjSubList.prototype.setLineItemValue = function( field, line, value ) { return null; }

// /**
//  * set values for multiple lines (Array of nlobjSearchResults or name-value pair Arrays) in this sublist.
//  * Note that this method is only supported on scripted sublists via the UI Object API
//  *
//  * @param {string[][]|nlobjSearchResult[]} values
//  * @since 2008.2
//  */
// nlobjSubList.prototype.setLineItemValues = function( values ) { return null; }

// /**
//  * Return the number of lines in a sublist.
//  *
//  * @param {string} group sublist name
//  *
//  * @method
//  * @memberOf nlobjSubList
//  * @since 2010.1
//  */
// nlobjSubList.prototype.getLineItemCount = function( group ) { return null; }

// /**
//  * add a field (column) to this sublist.
//  *
//  * @param {string} name field name
//  * @param {string} type field type
//  * @param {string} label field label
//  * @param {string|number} [source] script ID or internal ID for source list used for this select field
//  * @return {nlobjField}
//  *
//  * @method
//  * @memberOf nlobjSubList
//  *
//  * @since 2008.2
//  */
// nlobjSubList.prototype.addField = function( name,type,label,source ) { return null; }

// /**
//  * designate a field on sublist that must be unique across all lines (only supported on sublists of type inlineeditor, editor).
//  * @param {string} fldnam the name of a field on this sublist whose value must be unique across all lines
//  * @return {nlobjField}
//  *
//  * @method
//  * @memberOf nlobjSubList
//  *
//  * @since 2009.2
//  */
// nlobjSubList.prototype.setUniqueField = function( fldnam ) { return null; }

// /**
//  * add a button to this sublist.
//  *
//  * @param {string} name button name
//  * @param {string} label button label
//  * @param {string} script button script (function name)
//  * @return {nlobjButton}
//  *
//  * @method
//  * @memberOf nlobjSubList
//  *
//  * @since 2008.2
//  */
// nlobjSubList.prototype.addButton = function( name, label, script ) { return null; }

// /**
//  * add "Refresh" button to sublists of type "staticlist" to support manual refreshing of the sublist (without entire page reloads) if it's contents are very volatile
//  * @return {nlobjButton}
//  *
//  * @method
//  * @memberOf nlobjSubList
//  *
//  * @since 2009.2
//  */
// nlobjSubList.prototype.addRefreshButton = function( ) { return null; }

// /**
//  * add "Mark All" and "Unmark All" buttons to this sublist of type "list".
//  *
//  * @method
//  * @memberOf nlobjSubList
//  *
//  * @since 2008.2
//  */
// nlobjSubList.prototype.addMarkAllButtons = function( ) { return null; }

// /**
//  * Returns string value of a sublist field. Note that you cannot set default line item values when the line is not in edit mode.
//  *
//  * @param {string} group The sublist internal id
//  * @param {string} fldnam The internal ID of the field (line item) whose value is being returned
//  * @param {number} linenum The line number for this field. Note the first line number on a sublist is 1 (not 0).
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSubList
//  *
//  * @since 2010.1
//  */
// nlobjSubList.prototype.getLineItemValue = function(type, fldnam, linenum) { return null; }

// /**
//  * Designates a particular column as the totalling column, which is used to calculate and display a running total for the sublist
//  *
//  * @param {string} field The internal ID name of the field on this sublist used to calculate running total
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjSubList
//  *
//  * @since 2010.1
//  */
// nlobjSubList.prototype.getLineItemValue = function(type, fldnam, linenum) { return null; }

// /**
//  * Return a new instance of nlobjColumn used for scriptable list column.
//  *
//  * @classDescription Class definition for columns used on lists and list portlets.
//  * @return {nlobjColumn}
//  * @constructor
//  */
// function nlobjColumn( ) { return null; }

// /**
//  * set the header name for this column.
//  *
//  * @param {string} label the label for this column
//  *
//  * @method
//  * @memberOf nlobjColumn
//  *
//  * @since 2008.2
//  */
// nlobjColumn.prototype.setLabel = function( label ) { return null; }

// /**
//  * set the base URL (optionally defined per row) for this column.
//  *
//  * @param {string} value the base URL or a column in the datasource that returns the base URL for each row
//  * @param {boolean} perRow if true then the 1st arg is expected to be a column in the datasource
//  *
//  * @method
//  * @memberOf nlobjColumn
//  *
//  * @since 2008.2
//  */
// nlobjColumn.prototype.setURL = function( value, perRow ) { return null; }

// /**
//  * add a URL parameter (optionally defined per row) to this column's URL.
//  *
//  * @param {string} param the name of a parameter to add to URL
//  * @param {string} value the value of the parameter to add to URL -or- a column in the datasource that returns the parameter value for each row
//  * @param {boolean} [perRow] if true then the 2nd arg is expected to be a column in the datasource
//  *
//  * @method
//  * @memberOf nlobjColumn
//  *
//  * @since 2008.2
//  */
// nlobjColumn.prototype.addParamToURL = function( param, value, perRow ) { return null; }

// /**
//  * Return a new instance of nlobjTab used for scriptable tab or subtab.
//  *
//  * @classDescription high level grouping for fields on a data entry form (nlobjForm).
//  * @return {nlobjTab}
//  * @constructor
//  */
// function nlobjTab( ) { return null; }

// /**
//  * set the label for this tab or subtab.
//  *
//  * @param {string} label string used as label for this tab or subtab
//  * @return {nlobjTab}
//  *
//  * @since 2008.2
//  */
// nlobjTab.prototype.setLabel = function( label ) { return null; }

// /**
//  * set helper text for this tab or subtab.
//  *
//  * @param {string} help inline help text used for this tab or subtab
//  * @return {nlobjTab}
//  *
//  * @since 2008.2
//  */
// nlobjTab.prototype.setHelpText = function( help ) { return null; }

// /**
//  * Return a new instance of nlobjAssistantStep.
//  *
//  * @classDescription assistant step definition. Used to define individual steps/pages in multi-step workflows.
//  * @return {nlobjAssistantStep}
//  * @constructor
//  *
//  * @since 2009.2
//  */
// function nlobjAssistantStep( ) { return null; }

// /**
//  * set the label for this assistant step.
//  * @param {string} label display label used for this assistant step
//  * @return {void}
//  *
//  * @method
//  * @memberOf nlobjAssistantStep
//  *
//  * @since 2009.2
//  */
// nlobjAssistantStep.prototype.setLabel = function( label ) { return null; }

// /**
//  * set helper text for this assistant step.
//  * @param {string} help inline help text to display on assistant page for this step
//  * @return {nlobjAssistantStep}
//  *
//  * @method
//  * @memberOf nlobjAssistantStep
//  *
//  * @since 2009.2
//  */
// nlobjAssistantStep.prototype.setHelpText = function( help ) { return null; }

// /**
//  * return the index of this step in the assistant page (1-based)
//  * @return  {number} the index of this step in the assistant (1-based) based on the order in which the steps were added.
//  *
//  * @method
//  * @memberOf nlobjAssistantStep
//  *
//  * @since 2009.2
//  */
// nlobjAssistantStep.prototype.getStepNumber = function( ) { return null; }

// /**
//  * return the value of a field entered by the user during this step.
//  * @param {string} name field name
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjAssistantStep
//  *
//  * @since 2009.2
//  */
// nlobjAssistantStep.prototype.getFieldValue = function( name ) { return null; }

// /**
//  * return the selected values of a multi-select field as an Array entered by the user during this step.
//  * @param {string} name multi-select field name
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjAssistantStep
//  *
//  * @since 2009.2
//  */
// nlobjAssistantStep.prototype.getFieldValues = function( name ) { return null; }

// /**
//  * return the number of lines previously entered by the user in this step (or -1 if the sublist does not exist).
//  * @param {string} group sublist name
//  * @return {number}
//  *
//  * @method
//  * @memberOf nlobjAssistantStep
//  *
//  * @since 2009.2
//  */
// nlobjAssistantStep.prototype.getLineItemCount = function( group ) { return null; }

// /**
//  * return the value of a sublist field entered by the user during this step.
//  * @param {string} 	group sublist name
//  * @param {string} 	name sublist field name
//  * @param {number} 	line sublist (1-based)
//  * @return  {string}
//  *
//  * @method
//  * @memberOf nlobjAssistantStep
//  *
//  * @since 2009.2
//  */
// nlobjAssistantStep.prototype.getLineItemValue = function(group, name, line) { return null; }

// /**
//  * return an array of the names of all fields entered by the user during this step.
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjAssistantStep
//  *
//  * @since 2009.2
//  */
// nlobjAssistantStep.prototype.getAllFields = function( ) { return null; }

// /**
//  * return an array of the names of all sublists entered by the user during this step.
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjAssistantStep
//  *
//  * @since 2009.2
//  */
// nlobjAssistantStep.prototype.getAllLineItems = function( ) { return null; }

// /**
//  * return an array of the names of all sublist fields entered by the user during this step
//  * @param {string} group sublist name
//  * @return {string[]}
//  *
//  * @method
//  * @memberOf nlobjAssistantStep
//  *
//  * @since 2009.2
//  */
// nlobjAssistantStep.prototype.getAllLineItemFields = function( group ) { return null; }

// /**
//  * Return a new instance of nlobjFieldGroup (currently only supported on nlobjAssistant pages)
//  *
//  * @classDescription object used for grouping fields on pages (currently only supported on assistant pages).
//  * @return {nlobjFieldGroup}
//  * @constructor
//  *
//  * @since 2009.2
//  */
// function nlobjFieldGroup( ) { return null; }

// /**
//  * set the label for this field group.
//  * @param {string} label display label for field group
//  * @return {nlobjFieldGroup}
//  *
//  * @method
//  * @memberOf nlobjFieldGroup
//  *
//  * @since 2009.2
//  */
// nlobjFieldGroup.prototype.setLabel = function( label ) { return null; }

// /**
//  * set collapsibility property for this field group.
//  *
//  * @param {boolean} collapsible if true then this field group is collapsible
//  * @param {boolean} [defaultcollapsed] if true and the field group is collapsible, collapse this field group by default
//  * @return {nlobjFieldGroup}
//  *
//  * @method
//  * @memberOf nlobjFieldGroup
//  *
//  * @since 2009.2
//  */
// nlobjFieldGroup.prototype.setCollapsible = function( collapsible, defaultcollapsed ) { return null; }

// /**
//  * set singleColumn property for this field group.
//  *
//  * @param {boolean} singleColumn if true then this field group is displayed in single column
//  * @return {nlobjFieldGroup}
//  *
//  * @method
//  * @memberOf nlobjFieldGroup
//  *
//  * @since 2011.1
//  */
// nlobjFieldGroup.prototype.setSingleColumn = function( singleColumn ) { return null; }

// /**
//  * set showBorder property for this field group.
//  *
//  * @param {boolean} showBorder if true then this field group shows border including label of group
//  * @return {nlobjFieldGroup}
//  *
//  * @method
//  * @memberOf nlobjFieldGroup
//  *
//  * @since 2011.1
//  */
// nlobjFieldGroup.prototype.setShowBorder = function( showBorder ) { return null; }

// /**
//  * Return a new instance of nlobjButton.
//  *
//  * @classDescription buttons used for triggering custom behaviors on pages.
//  * @return {nlobjButton}
//  * @constructor
//  *
//  * @since 2009.2
//  */
// function nlobjButton( ) { return null; }

// /**
//  * set the label for this button.
//  * @param {string} label display label for button
//  * @return {nlobjButton}
//  *
//  * @method
//  * @memberOf nlobjButton
//  *
//  * @since 2008.2
//  */
// nlobjButton.prototype.setLabel = function( label ) { return null; }

// /**
//  * disable or enable button.
//  * @param {boolean} disabled if true then this button should be disabled on the page
//  * @return {nlobjButton}
//  *
//  * @method
//  * @memberOf nlobjButton
//  *
//  * @since 2008.2
//  */
// nlobjButton.prototype.setDisabled = function( disabled ) { return null; }

// /**
//  * Sets the button as hidden in the UI. This API is supported on custom buttons and on some standard NetSuite buttons
//  * @param {boolean} visible Defaults to true if not set. If set to false, the button will be hidden in the UI.
//  * @return {nlobjButton}
//  *
//  * @method
//  * @memberOf nlobjButton
//  *
//  * @since 2010.2
//  */
// nlobjButton.prototype.setVisible= function(visible) { return null; }

// /**
//  * Return a new instance of nlobjSelectOption.
//  *
//  * @classDescription select|radio option used for building select fields via the UI Object API and for describing select|radio fields.
//  * @return {nlobjSelectOption}
//  * @constructor
//  *
//  * @since 2009.2
//  */
// function nlobjSelectOption( ) { return null; }

// /**
//  * return internal ID for select option
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSelectOption
//  *
//  * @since 2009.2
//  */
// nlobjSelectOption.prototype.getId = function( ) { return null; }

// /**
//  * return display value for select option.
//  * @return {string}
//  *
//  * @method
//  * @memberOf nlobjSelectOption
//  *
//  * @since 2009.2
//  */
// nlobjSelectOption.prototype.getText = function( ) { return null; }


// /**
//  * @class 
//  */
// function nlobjLogin(){}

// /**
//  * @param {string} newEmail new Email
//  * @param {boolean} justThisAccount indicates whether to apply email change only to roles within this account or apply email change to its all NetSuite accounts and roles
//  * @return {void}
//  *
//  * @since 2012.2
//  */

// nlobjLogin.prototype.changeEmail = function (currentPassword, newEmail, justThisAccount)  { return null; }

// /**
//  * @param {string} newPassword new Password.
//  * @return {void}
//  *
//  * @since 2012.2
//  */
// nlobjLogin.prototype.changePassword = function (currentPassword, newPassword) { return null; }

// /**
//  * @class 
//  */
// function nlobjJobManager(){}

// /**
//  * @class 
//  */
// function nlobjJobRequest(){}

// /**
//  * @return {nlobjJobRequest}
//  *
//  * @since 2013.1
//  */
// nlobjJobManager.prototype.createJobRequest = function ()  { return null; }

// /**
//  * @param {nlobjJobRequest} Job request
//  * @return {String} Job Id
//  *
//  * @since 2013.1
//  */
// nlobjJobManager.prototype.submit = function (request)  { return null; }

// /**
//  * @class
//  */
// function nlobjFuture(){}
// /**
//  * @return {nlobjFuture}
//  *
//  * @since 2013.1
//  */
// nlobjJobManager.prototype.getFuture = function ()  { return null; }

// /**
//  * @class 
//  */
// function nlobjMergeResult(){}

// /*
//  * Use this method to get the body of the email distribution in string format.
//  *
//  * @return {string}
//  *
//  * @since 2015.1
//  */
// nlobjMergeResult.prototype.getBody = function () { return null; }

// /*
//  * Use this method to get the subject of the email distribution in string format.
//  *
//  * @return {string}
//  *
//  * @since 2015.1
//  */
// nlobjMergeResult.prototype.getSubject = function () { return null; }


// /**
//  * @class 
//  */
// function nlobjPivotColumn(){}

// /*
//  * Get the column alias.
//  *
//  * @return {string}
//  *
//  * @since 2012.2
//  */
// nlobjPivotColumn.prototype.getAlias = function () { return null; }

// /*
//  * Get dependency for specified alias
//  *
//  * @param {string} alias
//  * @return {object}
//  *
//  * @since 2012.2
//  */
// nlobjPivotColumn.prototype.getDependency = function (alias) { return null; }

// /*
//  * Get the parent column
//  *
//  * @return {nlobjPivotColumn}
//  *
//  * @since 2012.2
//  */
// nlobjPivotColumn.prototype.getParent = function (alias) { return null; }

// /*
//  * Get the column label.
//  *
//  * @return {string}
//  *
//  * @since 2012.2
//  */
// nlobjPivotColumn.prototype.getLabel = function () { return null; }

// /*
//  * Get the summary line.
//  *
//  * @return {nlobjPivotColumn}
//  *
//  * @since 2012.2
//  */
// nlobjPivotColumn.prototype.getSummaryLine = function () { return null; }


// /**
//  * @class 
//  */
// function nlobjPivotTable(){}

// /*
//  * Get the column hierarchy.
//  *
//  * @return {nlobjPivotColumn}
//  *
//  * @since 2012.2
//  */
// nlobjPivotTable.prototype.getColumnHierarchy = function() { return null; }

// /*
//  * Get the row hierarchy.
//  *
//  * @return {nlobjPivotRow}
//  *
//  * @since 2012.2
//  */
// nlobjPivotTable.prototype.getRowHierarchy = function() { return null; }


// /**
//  * @class 
//  */
// function nlobjPivotRow(){}

// /*
//  * Get the row alias.
//  *
//  * @return {string}
//  *
//  * @since 2012.2
//  */
// nlobjPivotRow.prototype.getAlias = function() { return null; }

// /*
//  * Get the children rows if there are any.
//  *
//  * @return {nlobjPivotRow[]}
//  *
//  * @since 2012.2
//  */
// nlobjPivotRow.prototype.getChildren = function() { return null; }

// /*
//  * Get the opening line.
//  *
//  * @return {nlobjPivotRow}
//  *
//  * @since 2012.2
//  */
// nlobjPivotRow.prototype.getOpeningLine = function() { return null; }

// /*
//  * Get the parent row
//  *
//  * @return {nlobjPivotRow}
//  *
//  * @since 2012.2
//  */
// nlobjPivotRow.prototype.getParent = function() { return null; }

// /*
//  * Get the summary line from the report.
//  *
//  * @return {nlobjPivotRow}
//  *
//  * @since 2012.2
//  */
// nlobjPivotRow.prototype.getSummaryLine = function() { return null; }


// /**
//  * @class 
//  */
// function nlobjPivotTableHandle(){}

// /*
//  * Get the pivot table object from the report definition.
//  *
//  * @return {nlobjPivotTable}
//  *
//  * @since 2012.2
//  */
// nlobjPivotTableHandle.prototype.getPivotTable = function() { return null; }

// /*
//  * Returns the completion status flag of the report definition execution.
//  *
//  * @return {boolean}
//  *
//  * @since 2012.2
//  */
// nlobjPivotTableHandle.prototype.isReady = function() { return null; }


// /**
//  * @class 
//  */
// function nlobjReportColumn(){}

// /*
//  * Get the formula for this column
//  *
//  * @return {string}
//  *
//  * @since 2012.2
//  */
// nlobjReportColumn.prototype.getFormula = function() { return null; }

// /*
//  * Get the parent reference of this column.
//  *
//  * @return {nlobjReportColumnHierarchy}
//  *
//  * @since 2012.2
//  */
// nlobjReportColumn.prototype.getParent = function() { return null; }

// /*
//  * Returns the measure flag
//  *
//  * @return {boolean}
//  *
//  * @since 2012.2
//  */
// nlobjReportColumn.prototype.isMeasure = function() { return null; }

// /**
//  * @class 
//  */
// function nlobjReportDefinition(){}

// /*
//  * Add a column to the report definition.
//  * @param {string} alias The column alias.
//  * @param {boolean} isMeasure A value of true means that the column is flagged as a measure.
//  * @param {string} label The column label that will be displayed on the report.
//  * @param {nlobjReportColumnHierarchy} [parent] The reference to the parent column in the hierarchy. If null, then this column will not be associated with a parent column.
//  * @param {string} format The data type that this column represents
//  * @param {string} [formula] A string which describes a mathematical formula in the format of 'F(x,y,z) = mathematical function', where x,y,z are previously defined aliases from addRowHierarchy, addColumnHierarchy, or addColumn calls.
//  *
//  * @return {nlobjReportColumn}
//  *
//  * @since 2012.2
//  */
// nlobjReportDefinition.prototype.addColumn = function(alias, isMeasure, label, parent, format, formula) { return null; }

// /*
//  * Add a column hierarchy to the report definition.
//  *
//  * @param {string} alias The column alias.
//  * @param {string} label The column label that will be displayed on the report.
//  * @param {nlobjReportColumnHierarchy} [parent] The reference of the parent column in the hierarchy. If null, then this column will be the root (top level) column.
//  * @param {string} format The data type that this column represents
//  *
//  * @return {nlobjReportColumnHierarchy}
//  *
//  * @since 2012.2
//  */
// nlobjReportDefinition.prototype.addColumnHierarchy = function(alias, label, parent, format) { return null; }

// /*
//  * Add a row hierarchy to the report definition.
//  *
//  * @param {string} alias The row alias.
//  * @param {string} label The row label that will be displayed on the report.
//  * @param {string} format The data type that this row represents
//  *
//  * @return {nlobjReportRowHierarchy}
//  *
//  * @since 2012.2
//  */
// nlobjReportDefinition.prototype.addRowHierarchy = function(alias, label, parent) { return null; }

// /*
//  * Attaches a search as a data source to the report definition.
//  *
//  * @param {string} searchType The type of records to search.
//  * @param {string} [id] The internal id if you are using a saved search as a data source.
//  * @param {nlobjSearchFilter[]} filters The array of search filters.
//  * @param {nlobjSearchColumns[]} columns The array of search columns.
//  * @param {string} map The mapping of rows/columns of the search to the report.
//  *
//  * @return {void}
//  *
//  * @since 2012.2
//  */
// nlobjReportDefinition.prototype.addSearchDatasource = function(searchType, id, filters, columns, map) { return null; }

// /*
//  * Creates the form for rendering from the report definition.
//  *
//  * @param {nlobjReportForm} searchType The form object created with nlapiCreateReportForm.
//  *
//  * @return {nlobjPivotTableHandle}
//  *
//  * @since 2012.2
//  */
// nlobjReportDefinition.prototype.executeReport = function(form) { return null; }

// /*
//  * Sets the title of the report definition.
//  *
//  * @param {string} [title] The name of the report definition.
//  *
//  * @return {nlobjPivotTableHandle}
//  *
//  * @since 2012.2
//  */
// nlobjReportDefinition.prototype.setTitle = function(title) { return null; }


// /**
//  * @class 
//  */
// function nlobjReportColumnHierarchy(){}

// /*
//  * Get the children reference of this column hierarchy.
//  *
//  * @return {nlobjReportColumnHierarchy}
//  *
//  * @since 2012.2
//  */
// nlobjReportColumnHierarchy.prototype.getChildren = function() { return null; }

// /*
//  * Get the parent reference of this column hierarchy.
//  *
//  * @return {nlobjReportColumnHierarchy}
//  *
//  * @since 2012.2
//  */
// nlobjReportColumnHierarchy.prototype.getParent = function() { return null; }


// /**
//  * @class 
//  */
// function nlobjReportRowHierarchy(){}

// /*
//  * Get the children reference of this row hierarchy.
//  *
//  * @return {nlobjReportRowHierarchy}
//  *
//  * @since 2012.2
//  */
// nlobjReportRowHierarchy.prototype.getChildren = function() { return null; }

// /*
//  * Get the parent reference of this row hierarchy.
//  *
//  * @return {nlobjReportRowHierarchy}
//  *
//  * @since 2012.2
//  */
// nlobjReportRowHierarchy.prototype.getParent = function() { return null; }


// /**
//  * @class 
//  */
// function nlobjDuplicateJobRequest(){}


// /**
//  * Constant for Merge Duplicate recrods Entity Types
//  * @since 2013.1
//  */
// nlobjDuplicateJobRequest.prototype.ENTITY_CUSTOMER = 'CUSTOMER';
// nlobjDuplicateJobRequest.prototype.ENTITY_CONTACT = 'CONTACT';
// nlobjDuplicateJobRequest.prototype.ENTITY_LEAD = 'LEAD';
// nlobjDuplicateJobRequest.prototype.ENTITY_PROSPECT = 'PROSPECT';
// nlobjDuplicateJobRequest.prototype.ENTITY_PARTNER = 'PARTNER';
// nlobjDuplicateJobRequest.prototype.ENTITY_VENDOR = 'VENDOR';

// /**
//  * Constant for Merge Duplicate recrods Merge MASTERSELECTIONMODE
//  * @since 2013.1
//  */
// nlobjDuplicateJobRequest.prototype.MASTERSELECTIONMODE_CREATED_EARLIEST = 'CREATED_EARLIEST';
// nlobjDuplicateJobRequest.prototype.MASTERSELECTIONMODE_MOST_RECENT_ACTIVITY = 'MOST_RECENT_ACTIVITY';
// nlobjDuplicateJobRequest.prototype.MASTERSELECTIONMODE_MOST_POPULATED_FIELDS = 'MOST_POPULATED_FIELDS';
// nlobjDuplicateJobRequest.prototype.MASTERSELECTIONMODE_SELECT_BY_ID = 'SELECT_BY_ID';

// /**
//  * Constant for Merge Duplicate recrods Merge operation
//  * @since 2013.1
//  */
// nlobjDuplicateJobRequest.prototype.OPERATION_MERGE = 'MERGE';
// nlobjDuplicateJobRequest.prototype.OPERATION_DELETE = 'DELETE';
// nlobjDuplicateJobRequest.prototype.OPERATION_MAKE_MASTER_PARENT = 'MAKE_MASTER_PARENT';
// nlobjDuplicateJobRequest.prototype.OPERATION_MARK_AS_NOT_DUPES = 'MARK_AS_NOT_DUPES';
// /**
//  * @param {String} Entity Type
//  * @return {void}
//  *
//  * @since 2013.1
//  */
// nlobjDuplicateJobRequest.prototype.setEntityType = function( entityType ) { return null; }

// /**
//  * @param {String} Master record ID
//  * @return {void}
//  *
//  * @since 2013.1
//  */
// nlobjDuplicateJobRequest.prototype.setMasterId = function( masterID ) { return null; }

// /**
//  * @param {String} Criteria
//  * @return {void}
//  *
//  * @since 2013.1
//  */
// nlobjDuplicateJobRequest.prototype.setMasterSelectionMode = function( masterSelectionMode ) { return null; }

// /**
//  * @param {String} Array of duplicate records IDs
//  * @return {void}
//  *
//  * @since 2013.1
//  */
// nlobjDuplicateJobRequest.prototype.setRecords = function( dupeRecords ) { return null; }

// /**
//  * @param {String} Operation
//  * @return {void}
//  *
//  * @since 2013.1
//  */
// nlobjDuplicateJobRequest.prototype.setOperation = function( operation ) { return null; }

// /**
//  * @return {boolean} status
//  *
//  * @since 2013.1
//  */
// nlobjFuture.prototype.isDone = function( ) { return null; }

// /**
//  * @return {String} Job ID
//  *
//  * @since 2013.1
//  */
// nlobjFuture.prototype.getId = function( ) { return null; }

// /**
//  * @return {boolean} is cancelled or not
//  *
//  * @since 2013.1
//  */
// nlobjFuture.prototype.isCancelled = function( ) { return null; }

// /**
//  * Returns string id of nlobjFuture object
//  * @return {string}
//  *
//  * @since 2013.1
//  */
// nlobjFuture.prototype.getId = function( ) { return null; }

// /**
//  * Cancels nlobjFuture task
//  * @return {boolean}
//  *
//  * @since 2013.1
//  */
// nlobjFuture.prototype.cancel = function( ) { return null; }


// /**
//  * @class 
//  */
// function nlobjCache(){}


// /**
//  * @param {string} key
//  * @param {string} value
//  * @param {number} ttl, time to live in seconds.
//  * @return {object} status.
//  *
//  * @since 2013.2
//  */
// nlobjCache.prototype.put = function (key, value, ttl) {return null;}


// /**
//  * @param {string} key
//  * @return {String}  value associate with that key.
//  *
//  * @since 2013.2
//  */
// nlobjCache.prototype.get = function (key) {return null;}


// /**
//  * @param {string} key
//  * @return {object} status.
//  *
//  * @since 2013.2
//  */
// nlobjCache.prototype.remove = function (key) {return null;}
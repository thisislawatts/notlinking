module.exports = (options) => {

	let publisher = options.publiserUrl || false;
	let msg = options.message || 'Downloading this typeface is stealing.';
	let regex = options.pattern || /\.(woff)/;

	return (req, res,next) => {

		if ( req.originalUrl.match(regex) ) {


			if (publisher) {
				res.set('X-Available-From', publisher );
			}

			res.set('X-Protected', msg );

			if ( !req.get('Referrer') || !req.get('Referrer').indexOf( req.hostname ) ) {
				var response = `${msg}`;

				if (publisher) {
					response += ` Available from: ${publisher}`;
				}

				res.status(418).send( response );
			}
		}


		next();
	}
}
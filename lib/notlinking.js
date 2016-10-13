module.exports = (options) => {

	let foundry = options.foundryUrl || false;
	let msg = options.message || 'Downloading this typeface is stealing.';

	return (req, res,next) => {

		if ( req.originalUrl.match(/\.(woff)/) ) {


			if (foundry) {
				res.set('X-Font-Available-From', foundry );
			}

			res.set('X-Font-Protected', msg );

			if ( !req.get('Referrer') || !req.get('Referrer').indexOf( req.hostname ) ) {
				var response = `${msg}`;

				if (foundry) {
					response += `Purchase it from: ${foundry}`;
				}

				res.status(418).send( response );
			}
		}


		next();
	}
}
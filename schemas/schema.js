// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import project from "./project";
//aboutSEction
import aboutSection from "./about";
import eductionSection from "./educationSection";
//PageSections
import hero from "./pageSections/hero";
import imageCollection from "./pageSections/imageCollection";
import imageElement from "./pageSections/imageElement";
import textCollection from "./pageSections/textCollection";
import textElement from "./pageSections/textElement";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* Your types here! */
		project,
		//aboutSection
		aboutSection,
		eductionSection,
		//pageSections
		hero,
		imageCollection,
		imageElement,
		textCollection,
		textElement,
	]),
});

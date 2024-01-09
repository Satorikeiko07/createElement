/*
 * simple createElement
 * :: Based on kitajs/html
 *
 */

/**
 * Returns the nature of the tag
 * @param {string} tag HTML tag name
 * @returns {boolean} returns true if it is a closed tag element
 */
function isClosed(tag){
    return (
        tag == "area" ||
        tag == "base" ||
        tag == "br" ||
        tag == "col" ||
        tag == "embed" ||
        tag == "hr" ||
        tag == "img" ||
        tag == "input" ||
        tag == "link" ||
        tag == "meta" ||
        tag == "param" ||
        tag == "source" ||
        tag == "track" ||
        tag == "wbr" ||
        // Obsolete
        tag == "command" ||
        tag == "keygen" ||
        tag == "menuitem" ||
        tag == "frame"
    )
}

/**
 * creates an HTML element based on a tag 
 * @param {string} tag required HTML tag name
 * @param {object|null} props more information given such as id or class, can be null if none wants to be given
 * @param {string|number} content 
 * @returns HTML element with its tag name and any content in said
 */
function createElement(tag, props, content) {
    if (!tag) {
        throw Error('No valid tag provided')
    }

    let propsString = ''
    if (props) {
        for (const [key, value] of Object.entries(props)) {
            propsString += ` ${key}="${value}"`   
        }
    }

    const base = isClosed(tag)
        ? `<${tag}${props ? propsString : ''}/>` // if true use other syntax
        : `<${tag}${props ? propsString : ''}>${content ? content : ""}</${tag}>` // else alas we ball (use normal syntax)

    return base
}

exports.createElement = createElement
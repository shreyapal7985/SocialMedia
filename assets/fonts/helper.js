export const getFontFamily=(baseFont='Inter',weight)=>{
    switch(weight){
        case '100':
            return `${baseFont}_18pt-Thin`
            case '200':
            return `${baseFont}_18pt-ExtraLight`
            case '300':
            return `${baseFont}_18pt-Light`
            case 'normal':
            case '400':
            return `${baseFont}_18pt-Regular`
            case '500':
            return `${baseFont}_18pt-Medium`
            case '600':
            return `${baseFont}_18pt-SemiBold`
            case 'bold':
            case '700':
            return `${baseFont}_18pt-bold`
            case '800':
            return `${baseFont}_18pt-ExtraBold`
            case '900':
            return `${baseFont}_28pt-Black`
            default:
            return `${baseFont}_18pt-Regular`
            
    }
}
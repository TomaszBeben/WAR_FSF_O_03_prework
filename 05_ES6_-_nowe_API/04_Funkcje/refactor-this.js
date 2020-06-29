// Describes charset used in banned
const charset = {
  border: '*',
  whitespace: ' ',

  // Corner characters:
  lTCorner: '*',
  rTCorner: '*',
  lBCorner: '*',
  rBCorner: '*',
};

function buildBanner(text) {
  var pattern = '';

  // Add some spacing on each side of the text
  var bannerWidth = text.length + 8;

  
  const getTopBorderline = (index) => { 
    leftCorner = charset.lTCorner ? charset.lTCorner : '*';
    rightCorner = () => rightCorner = rTCorner ? charset.rTCorner : '*';
    return index === 0 ? leftCorner : index === bannerWidth-1 ? rightCorner : charset.border;
  }

  // Build first row of the banner
  pattern += Array(bannerWidth).fill(' ').map(getTopBorderline).join('');
  pattern += '\n';

  
  const generateBannerMiddleSection = (elt, index) => {
    return index === 0 ? charset.border || '*' : index === bannerWidth -1 ? charset.border || '*' : charset.whiteSpace || ' ';
  }


  pattern += Array(bannerWidth).fill(' ').map(generateBannerMiddleSection).join('');
  pattern += '\n';

  function generateBannerTextline(elt, index) {
    const text_index = index - (bannerWidth - text.length) / 2;
    return index === 0 ? charset.border || '*' : index === bannerWidth - 1 ? charset.border || '*' : text[text_index] || ' ';
  }

  pattern += Array(bannerWidth).fill(' ').map(generateBannerTextline).join('');
  pattern += '\n';

  // Generate another empty line
  pattern += Array(bannerWidth).fill(' ').map(generateBannerMiddleSection).join('');
  pattern += '\n';

  
  function generateBottomBorder(elt, index) {
    leftCorner = charset.lTCorner ? charset.lTCorner : '*';
    rightCorner =charset.rTCorner ? charset.rTCorner : '*';
    return index === 0 ? leftCorner : index === bannerWidth -1 ? rightCorner : charset.border || '*' 
  }

  // Generate bottom line
  pattern += Array(bannerWidth).fill(' ').map(generateBottomBorder).join('');

  return pattern;
}

const banner = buildBanner.bind(charset)('Test Text');

console.log('Banner: ');
console.log(banner);

console.assert(banner === '*****************\n*               *\n*   Test Text   *\n*               *\n*****************', 'Banner is not properly generated!\n\n', banner);

const path = require('path');
/*_____________CONTEXT_______________ */
const CONTEXT = path.resolve(__dirname, './');
const SRC = path.resolve(__dirname, './src');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        pages:       `${SRC}/pages`,
        layouts:     `${SRC}/layouts`,
        components:  `${SRC}/components`,
        resources:   `${SRC}/resources`,
        tables:      `${SRC}/tables`,
        store:       `${SRC}/store`,
        reducers:    `${SRC}/store/reducers`,
        themes:      `${SRC}/themes`,
        
        explorer:    `${SRC}/components/explorer`,
      }    
    }
  }
}
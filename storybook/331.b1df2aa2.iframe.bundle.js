"use strict";(self.webpackChunk_anujsharma141_reactsearch=self.webpackChunk_anujsharma141_reactsearch||[]).push([[331],{"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./node_modules/fuse.js/dist/fuse.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isArray(value){return Array.isArray?Array.isArray(value):"[object Array]"===getTag(value)}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const INFINITY=1/0;function toString(value){return null==value?"":function baseToString(value){if("string"==typeof value)return value;let result=value+"";return"0"==result&&1/value==-INFINITY?"-0":result}(value)}function isString(value){return"string"==typeof value}function isNumber(value){return"number"==typeof value}function isBoolean(value){return!0===value||!1===value||function isObjectLike(value){return isObject(value)&&null!==value}(value)&&"[object Boolean]"==getTag(value)}function isObject(value){return"object"==typeof value}function isDefined(value){return null!=value}function isBlank(value){return!value.trim().length}function getTag(value){return null==value?void 0===value?"[object Undefined]":"[object Null]":Object.prototype.toString.call(value)}const MISSING_KEY_PROPERTY=name=>`Missing ${name} property in key`,INVALID_KEY_WEIGHT_VALUE=key=>`Property 'weight' in key '${key}' must be a positive integer`,hasOwn=Object.prototype.hasOwnProperty;class KeyStore{constructor(keys){this._keys=[],this._keyMap={};let totalWeight=0;keys.forEach((key=>{let obj=createKey(key);totalWeight+=obj.weight,this._keys.push(obj),this._keyMap[obj.id]=obj,totalWeight+=obj.weight})),this._keys.forEach((key=>{key.weight/=totalWeight}))}get(keyId){return this._keyMap[keyId]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function createKey(key){let path=null,id=null,src=null,weight=1;if(isString(key)||isArray(key))src=key,path=createKeyPath(key),id=createKeyId(key);else{if(!hasOwn.call(key,"name"))throw new Error(MISSING_KEY_PROPERTY("name"));const name=key.name;if(src=name,hasOwn.call(key,"weight")&&(weight=key.weight,weight<=0))throw new Error(INVALID_KEY_WEIGHT_VALUE(name));path=createKeyPath(name),id=createKeyId(name)}return{path,id,weight,src}}function createKeyPath(key){return isArray(key)?key:key.split(".")}function createKeyId(key){return isArray(key)?key.join("."):key}var Config={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(a,b)=>a.score===b.score?a.idx<b.idx?-1:1:a.score<b.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function get(obj,path){let list=[],arr=!1;const deepGet=(obj,path,index)=>{if(isDefined(obj))if(path[index]){const value=obj[path[index]];if(!isDefined(value))return;if(index===path.length-1&&(isString(value)||isNumber(value)||isBoolean(value)))list.push(toString(value));else if(isArray(value)){arr=!0;for(let i=0,len=value.length;i<len;i+=1)deepGet(value[i],path,index+1)}else path.length&&deepGet(value,path,index+1)}else list.push(obj)};return deepGet(obj,isString(path)?path.split("."):path,0),arr?list:list[0]},ignoreLocation:!1,ignoreFieldNorm:!1}};const SPACE=/[^ ]+/g;class FuseIndex{constructor({getFn=Config.getFn}={}){this.norm=function norm(mantissa=3){const cache=new Map,m=Math.pow(10,mantissa);return{get(value){const numTokens=value.match(SPACE).length;if(cache.has(numTokens))return cache.get(numTokens);const norm=1/Math.sqrt(numTokens),n=parseFloat(Math.round(norm*m)/m);return cache.set(numTokens,n),n},clear(){cache.clear()}}}(3),this.getFn=getFn,this.isCreated=!1,this.setIndexRecords()}setSources(docs=[]){this.docs=docs}setIndexRecords(records=[]){this.records=records}setKeys(keys=[]){this.keys=keys,this._keysMap={},keys.forEach(((key,idx)=>{this._keysMap[key.id]=idx}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,isString(this.docs[0])?this.docs.forEach(((doc,docIndex)=>{this._addString(doc,docIndex)})):this.docs.forEach(((doc,docIndex)=>{this._addObject(doc,docIndex)})),this.norm.clear())}add(doc){const idx=this.size();isString(doc)?this._addString(doc,idx):this._addObject(doc,idx)}removeAt(idx){this.records.splice(idx,1);for(let i=idx,len=this.size();i<len;i+=1)this.records[i].i-=1}getValueForItemAtKeyId(item,keyId){return item[this._keysMap[keyId]]}size(){return this.records.length}_addString(doc,docIndex){if(!isDefined(doc)||isBlank(doc))return;let record={v:doc,i:docIndex,n:this.norm.get(doc)};this.records.push(record)}_addObject(doc,docIndex){let record={i:docIndex,$:{}};this.keys.forEach(((key,keyIndex)=>{let value=this.getFn(doc,key.path);if(isDefined(value))if(isArray(value)){let subRecords=[];const stack=[{nestedArrIndex:-1,value}];for(;stack.length;){const{nestedArrIndex,value}=stack.pop();if(isDefined(value))if(isString(value)&&!isBlank(value)){let subRecord={v:value,i:nestedArrIndex,n:this.norm.get(value)};subRecords.push(subRecord)}else isArray(value)&&value.forEach(((item,k)=>{stack.push({nestedArrIndex:k,value:item})}))}record.$[keyIndex]=subRecords}else if(!isBlank(value)){let subRecord={v:value,n:this.norm.get(value)};record.$[keyIndex]=subRecord}})),this.records.push(record)}toJSON(){return{keys:this.keys,records:this.records}}}function createIndex(keys,docs,{getFn=Config.getFn}={}){const myIndex=new FuseIndex({getFn});return myIndex.setKeys(keys.map(createKey)),myIndex.setSources(docs),myIndex.create(),myIndex}function computeScore(pattern,{errors=0,currentLocation=0,expectedLocation=0,distance=Config.distance,ignoreLocation=Config.ignoreLocation}={}){const accuracy=errors/pattern.length;if(ignoreLocation)return accuracy;const proximity=Math.abs(expectedLocation-currentLocation);return distance?accuracy+proximity/distance:proximity?1:accuracy}function search(text,pattern,patternAlphabet,{location=Config.location,distance=Config.distance,threshold=Config.threshold,findAllMatches=Config.findAllMatches,minMatchCharLength=Config.minMatchCharLength,includeMatches=Config.includeMatches,ignoreLocation=Config.ignoreLocation}={}){if(pattern.length>32)throw new Error(`Pattern length exceeds max of ${32}.`);const patternLen=pattern.length,textLen=text.length,expectedLocation=Math.max(0,Math.min(location,textLen));let currentThreshold=threshold,bestLocation=expectedLocation;const computeMatches=minMatchCharLength>1||includeMatches,matchMask=computeMatches?Array(textLen):[];let index;for(;(index=text.indexOf(pattern,bestLocation))>-1;){let score=computeScore(pattern,{currentLocation:index,expectedLocation,distance,ignoreLocation});if(currentThreshold=Math.min(score,currentThreshold),bestLocation=index+patternLen,computeMatches){let i=0;for(;i<patternLen;)matchMask[index+i]=1,i+=1}}bestLocation=-1;let lastBitArr=[],finalScore=1,binMax=patternLen+textLen;const mask=1<<patternLen-1;for(let i=0;i<patternLen;i+=1){let binMin=0,binMid=binMax;for(;binMin<binMid;){computeScore(pattern,{errors:i,currentLocation:expectedLocation+binMid,expectedLocation,distance,ignoreLocation})<=currentThreshold?binMin=binMid:binMax=binMid,binMid=Math.floor((binMax-binMin)/2+binMin)}binMax=binMid;let start=Math.max(1,expectedLocation-binMid+1),finish=findAllMatches?textLen:Math.min(expectedLocation+binMid,textLen)+patternLen,bitArr=Array(finish+2);bitArr[finish+1]=(1<<i)-1;for(let j=finish;j>=start;j-=1){let currentLocation=j-1,charMatch=patternAlphabet[text.charAt(currentLocation)];if(computeMatches&&(matchMask[currentLocation]=+!!charMatch),bitArr[j]=(bitArr[j+1]<<1|1)&charMatch,i&&(bitArr[j]|=(lastBitArr[j+1]|lastBitArr[j])<<1|1|lastBitArr[j+1]),bitArr[j]&mask&&(finalScore=computeScore(pattern,{errors:i,currentLocation,expectedLocation,distance,ignoreLocation}),finalScore<=currentThreshold)){if(currentThreshold=finalScore,bestLocation=currentLocation,bestLocation<=expectedLocation)break;start=Math.max(1,2*expectedLocation-bestLocation)}}if(computeScore(pattern,{errors:i+1,currentLocation:expectedLocation,expectedLocation,distance,ignoreLocation})>currentThreshold)break;lastBitArr=bitArr}const result={isMatch:bestLocation>=0,score:Math.max(.001,finalScore)};if(computeMatches){const indices=function convertMaskToIndices(matchmask=[],minMatchCharLength=Config.minMatchCharLength){let indices=[],start=-1,end=-1,i=0;for(let len=matchmask.length;i<len;i+=1){let match=matchmask[i];match&&-1===start?start=i:match||-1===start||(end=i-1,end-start+1>=minMatchCharLength&&indices.push([start,end]),start=-1)}return matchmask[i-1]&&i-start>=minMatchCharLength&&indices.push([start,i-1]),indices}(matchMask,minMatchCharLength);indices.length?includeMatches&&(result.indices=indices):result.isMatch=!1}return result}function createPatternAlphabet(pattern){let mask={};for(let i=0,len=pattern.length;i<len;i+=1){const char=pattern.charAt(i);mask[char]=(mask[char]||0)|1<<len-i-1}return mask}class BitapSearch{constructor(pattern,{location=Config.location,threshold=Config.threshold,distance=Config.distance,includeMatches=Config.includeMatches,findAllMatches=Config.findAllMatches,minMatchCharLength=Config.minMatchCharLength,isCaseSensitive=Config.isCaseSensitive,ignoreLocation=Config.ignoreLocation}={}){if(this.options={location,threshold,distance,includeMatches,findAllMatches,minMatchCharLength,isCaseSensitive,ignoreLocation},this.pattern=isCaseSensitive?pattern:pattern.toLowerCase(),this.chunks=[],!this.pattern.length)return;const addChunk=(pattern,startIndex)=>{this.chunks.push({pattern,alphabet:createPatternAlphabet(pattern),startIndex})},len=this.pattern.length;if(len>32){let i=0;const remainder=len%32,end=len-remainder;for(;i<end;)addChunk(this.pattern.substr(i,32),i),i+=32;if(remainder){const startIndex=len-32;addChunk(this.pattern.substr(startIndex),startIndex)}}else addChunk(this.pattern,0)}searchIn(text){const{isCaseSensitive,includeMatches}=this.options;if(isCaseSensitive||(text=text.toLowerCase()),this.pattern===text){let result={isMatch:!0,score:0};return includeMatches&&(result.indices=[[0,text.length-1]]),result}const{location,distance,threshold,findAllMatches,minMatchCharLength,ignoreLocation}=this.options;let allIndices=[],totalScore=0,hasMatches=!1;this.chunks.forEach((({pattern,alphabet,startIndex})=>{const{isMatch,score,indices}=search(text,pattern,alphabet,{location:location+startIndex,distance,threshold,findAllMatches,minMatchCharLength,includeMatches,ignoreLocation});isMatch&&(hasMatches=!0),totalScore+=score,isMatch&&indices&&(allIndices=[...allIndices,...indices])}));let result={isMatch:hasMatches,score:hasMatches?totalScore/this.chunks.length:1};return hasMatches&&includeMatches&&(result.indices=allIndices),result}}class BaseMatch{constructor(pattern){this.pattern=pattern}static isMultiMatch(pattern){return getMatch(pattern,this.multiRegex)}static isSingleMatch(pattern){return getMatch(pattern,this.singleRegex)}search(){}}function getMatch(pattern,exp){const matches=pattern.match(exp);return matches?matches[1]:null}class FuzzyMatch extends BaseMatch{constructor(pattern,{location=Config.location,threshold=Config.threshold,distance=Config.distance,includeMatches=Config.includeMatches,findAllMatches=Config.findAllMatches,minMatchCharLength=Config.minMatchCharLength,isCaseSensitive=Config.isCaseSensitive,ignoreLocation=Config.ignoreLocation}={}){super(pattern),this._bitapSearch=new BitapSearch(pattern,{location,threshold,distance,includeMatches,findAllMatches,minMatchCharLength,isCaseSensitive,ignoreLocation})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(text){return this._bitapSearch.searchIn(text)}}class IncludeMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(text){let index,location=0;const indices=[],patternLen=this.pattern.length;for(;(index=text.indexOf(this.pattern,location))>-1;)location=index+patternLen,indices.push([index,location-1]);const isMatch=!!indices.length;return{isMatch,score:isMatch?0:1,indices}}}const searchers=[class ExactMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(text){const isMatch=text===this.pattern;return{isMatch,score:isMatch?0:1,indices:[0,this.pattern.length-1]}}},IncludeMatch,class PrefixExactMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(text){const isMatch=text.startsWith(this.pattern);return{isMatch,score:isMatch?0:1,indices:[0,this.pattern.length-1]}}},class InversePrefixExactMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(text){const isMatch=!text.startsWith(this.pattern);return{isMatch,score:isMatch?0:1,indices:[0,text.length-1]}}},class InverseSuffixExactMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(text){const isMatch=!text.endsWith(this.pattern);return{isMatch,score:isMatch?0:1,indices:[0,text.length-1]}}},class SuffixExactMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(text){const isMatch=text.endsWith(this.pattern);return{isMatch,score:isMatch?0:1,indices:[text.length-this.pattern.length,text.length-1]}}},class InverseExactMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(text){const isMatch=-1===text.indexOf(this.pattern);return{isMatch,score:isMatch?0:1,indices:[0,text.length-1]}}},FuzzyMatch],searchersLen=searchers.length,SPACE_RE=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;const MultiMatchSet=new Set([FuzzyMatch.type,IncludeMatch.type]);class ExtendedSearch{constructor(pattern,{isCaseSensitive=Config.isCaseSensitive,includeMatches=Config.includeMatches,minMatchCharLength=Config.minMatchCharLength,ignoreLocation=Config.ignoreLocation,findAllMatches=Config.findAllMatches,location=Config.location,threshold=Config.threshold,distance=Config.distance}={}){this.query=null,this.options={isCaseSensitive,includeMatches,minMatchCharLength,findAllMatches,ignoreLocation,location,threshold,distance},this.pattern=isCaseSensitive?pattern:pattern.toLowerCase(),this.query=function parseQuery(pattern,options={}){return pattern.split("|").map((item=>{let query=item.trim().split(SPACE_RE).filter((item=>item&&!!item.trim())),results=[];for(let i=0,len=query.length;i<len;i+=1){const queryItem=query[i];let found=!1,idx=-1;for(;!found&&++idx<searchersLen;){const searcher=searchers[idx];let token=searcher.isMultiMatch(queryItem);token&&(results.push(new searcher(token,options)),found=!0)}if(!found)for(idx=-1;++idx<searchersLen;){const searcher=searchers[idx];let token=searcher.isSingleMatch(queryItem);if(token){results.push(new searcher(token,options));break}}}return results}))}(this.pattern,this.options)}static condition(_,options){return options.useExtendedSearch}searchIn(text){const query=this.query;if(!query)return{isMatch:!1,score:1};const{includeMatches,isCaseSensitive}=this.options;text=isCaseSensitive?text:text.toLowerCase();let numMatches=0,allIndices=[],totalScore=0;for(let i=0,qLen=query.length;i<qLen;i+=1){const searchers=query[i];allIndices.length=0,numMatches=0;for(let j=0,pLen=searchers.length;j<pLen;j+=1){const searcher=searchers[j],{isMatch,indices,score}=searcher.search(text);if(!isMatch){totalScore=0,numMatches=0,allIndices.length=0;break}if(numMatches+=1,totalScore+=score,includeMatches){const type=searcher.constructor.type;MultiMatchSet.has(type)?allIndices=[...allIndices,...indices]:allIndices.push(indices)}}if(numMatches){let result={isMatch:!0,score:totalScore/numMatches};return includeMatches&&(result.indices=allIndices),result}}return{isMatch:!1,score:1}}}const registeredSearchers=[];function createSearcher(pattern,options){for(let i=0,len=registeredSearchers.length;i<len;i+=1){let searcherClass=registeredSearchers[i];if(searcherClass.condition(pattern,options))return new searcherClass(pattern,options)}return new BitapSearch(pattern,options)}const LogicalOperator_AND="$and",LogicalOperator_OR="$or",KeyType_PATH="$path",KeyType_PATTERN="$val",isExpression=query=>!(!query[LogicalOperator_AND]&&!query[LogicalOperator_OR]),convertToExplicit=query=>({[LogicalOperator_AND]:Object.keys(query).map((key=>({[key]:query[key]})))});function parse(query,options,{auto=!0}={}){const next=query=>{let keys=Object.keys(query);const isQueryPath=(query=>!!query[KeyType_PATH])(query);if(!isQueryPath&&keys.length>1&&!isExpression(query))return next(convertToExplicit(query));if((query=>!isArray(query)&&isObject(query)&&!isExpression(query))(query)){const key=isQueryPath?query[KeyType_PATH]:keys[0],pattern=isQueryPath?query[KeyType_PATTERN]:query[key];if(!isString(pattern))throw new Error((key=>`Invalid value for key ${key}`)(key));const obj={keyId:createKeyId(key),pattern};return auto&&(obj.searcher=createSearcher(pattern,options)),obj}let node={children:[],operator:keys[0]};return keys.forEach((key=>{const value=query[key];isArray(value)&&value.forEach((item=>{node.children.push(next(item))}))})),node};return isExpression(query)||(query=convertToExplicit(query)),next(query)}function transformMatches(result,data){const matches=result.matches;data.matches=[],isDefined(matches)&&matches.forEach((match=>{if(!isDefined(match.indices)||!match.indices.length)return;const{indices,value}=match;let obj={indices,value};match.key&&(obj.key=match.key.src),match.idx>-1&&(obj.refIndex=match.idx),data.matches.push(obj)}))}function transformScore(result,data){data.score=result.score}class Fuse{constructor(docs,options={},index){this.options={...Config,...options},this.options.useExtendedSearch,this._keyStore=new KeyStore(this.options.keys),this.setCollection(docs,index)}setCollection(docs,index){if(this._docs=docs,index&&!(index instanceof FuseIndex))throw new Error("Incorrect 'index' type");this._myIndex=index||createIndex(this.options.keys,this._docs,{getFn:this.options.getFn})}add(doc){isDefined(doc)&&(this._docs.push(doc),this._myIndex.add(doc))}remove(predicate=(()=>!1)){const results=[];for(let i=0,len=this._docs.length;i<len;i+=1){const doc=this._docs[i];predicate(doc,i)&&(this.removeAt(i),i-=1,len-=1,results.push(doc))}return results}removeAt(idx){this._docs.splice(idx,1),this._myIndex.removeAt(idx)}getIndex(){return this._myIndex}search(query,{limit=-1}={}){const{includeMatches,includeScore,shouldSort,sortFn,ignoreFieldNorm}=this.options;let results=isString(query)?isString(this._docs[0])?this._searchStringList(query):this._searchObjectList(query):this._searchLogical(query);return function computeScore$1(results,{ignoreFieldNorm=Config.ignoreFieldNorm}){results.forEach((result=>{let totalScore=1;result.matches.forEach((({key,norm,score})=>{const weight=key?key.weight:null;totalScore*=Math.pow(0===score&&weight?Number.EPSILON:score,(weight||1)*(ignoreFieldNorm?1:norm))})),result.score=totalScore}))}(results,{ignoreFieldNorm}),shouldSort&&results.sort(sortFn),isNumber(limit)&&limit>-1&&(results=results.slice(0,limit)),function format(results,docs,{includeMatches=Config.includeMatches,includeScore=Config.includeScore}={}){const transformers=[];return includeMatches&&transformers.push(transformMatches),includeScore&&transformers.push(transformScore),results.map((result=>{const{idx}=result,data={item:docs[idx],refIndex:idx};return transformers.length&&transformers.forEach((transformer=>{transformer(result,data)})),data}))}(results,this._docs,{includeMatches,includeScore})}_searchStringList(query){const searcher=createSearcher(query,this.options),{records}=this._myIndex,results=[];return records.forEach((({v:text,i:idx,n:norm})=>{if(!isDefined(text))return;const{isMatch,score,indices}=searcher.searchIn(text);isMatch&&results.push({item:text,idx,matches:[{score,value:text,norm,indices}]})})),results}_searchLogical(query){const expression=parse(query,this.options),evaluate=(node,item,idx)=>{if(!node.children){const{keyId,searcher}=node,matches=this._findMatches({key:this._keyStore.get(keyId),value:this._myIndex.getValueForItemAtKeyId(item,keyId),searcher});return matches&&matches.length?[{idx,item,matches}]:[]}switch(node.operator){case LogicalOperator_AND:{const res=[];for(let i=0,len=node.children.length;i<len;i+=1){const child=node.children[i],result=evaluate(child,item,idx);if(!result.length)return[];res.push(...result)}return res}case LogicalOperator_OR:{const res=[];for(let i=0,len=node.children.length;i<len;i+=1){const child=node.children[i],result=evaluate(child,item,idx);if(result.length){res.push(...result);break}}return res}}},records=this._myIndex.records,resultMap={},results=[];return records.forEach((({$:item,i:idx})=>{if(isDefined(item)){let expResults=evaluate(expression,item,idx);expResults.length&&(resultMap[idx]||(resultMap[idx]={idx,item,matches:[]},results.push(resultMap[idx])),expResults.forEach((({matches})=>{resultMap[idx].matches.push(...matches)})))}})),results}_searchObjectList(query){const searcher=createSearcher(query,this.options),{keys,records}=this._myIndex,results=[];return records.forEach((({$:item,i:idx})=>{if(!isDefined(item))return;let matches=[];keys.forEach(((key,keyIndex)=>{matches.push(...this._findMatches({key,value:item[keyIndex],searcher}))})),matches.length&&results.push({idx,item,matches})})),results}_findMatches({key,value,searcher}){if(!isDefined(value))return[];let matches=[];if(isArray(value))value.forEach((({v:text,i:idx,n:norm})=>{if(!isDefined(text))return;const{isMatch,score,indices}=searcher.searchIn(text);isMatch&&matches.push({score,key,value:text,idx,norm,indices})}));else{const{v:text,n:norm}=value,{isMatch,score,indices}=searcher.searchIn(text);isMatch&&matches.push({score,key,value:text,norm,indices})}return matches}}Fuse.version="6.4.6",Fuse.createIndex=createIndex,Fuse.parseIndex=function parseIndex(data,{getFn=Config.getFn}={}){const{keys,records}=data,myIndex=new FuseIndex({getFn});return myIndex.setKeys(keys),myIndex.setIndexRecords(records),myIndex},Fuse.config=Config,Fuse.parseQuery=parse,function register(...args){registeredSearchers.push(...args)}(ExtendedSearch);const __WEBPACK_DEFAULT_EXPORT__=Fuse}}]);
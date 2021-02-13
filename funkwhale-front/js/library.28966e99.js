(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["library"],{"0292":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-card card"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.imageUrl,expression:"imageUrl",arg:"background-image"}],class:["ui","head-image","circular","image",{"default-cover":!t.cover||!t.cover.urls.original}],on:{click:function(e){return t.$router.push({name:"library.artists.detail",params:{id:t.artist.id}})}}},[a("play-button",{attrs:{"icon-only":!0,"is-playable":t.artist.is_playable,"button-classes":["ui","circular","large","vibrant","icon","button"],artist:t.artist}})],1),a("div",{staticClass:"content"},[a("strong",[a("router-link",{staticClass:"discrete link",attrs:{to:{name:"library.artists.detail",params:{id:t.artist.id}}}},[t._v(" "+t._s(t._f("truncate")(t.artist.name,30))+" ")])],1),a("tags-list",{attrs:{"label-classes":"tiny","truncate-size":20,limit:2,"show-more":!1,tags:t.artist.tags}})],1),a("div",{staticClass:"extra content"},[a("translate",{attrs:{"translate-context":"*/*/*","translate-params":{count:t.artist.tracks_count},"translate-n":t.artist.tracks_count,"translate-plural":"%{ count } tracks"}},[t._v("%{ count } track")]),a("play-button",{staticClass:"right floated basic icon",attrs:{"dropdown-only":!0,"is-playable":t.artist.is_playable,"dropdown-icon-classes":["ellipsis","horizontal","large really discrete"],artist:t.artist}})],1)])},i=[],r=(a("4de4"),a("d81d"),a("a3e6")),n=a("6b08"),l={props:["artist"],components:{PlayButton:r["a"],TagsList:n["a"]},data:function(){return{initialAlbums:30,showAllAlbums:!0}},computed:{imageUrl:function(){var t=this.cover;if(t&&t.urls.original)return this.$store.getters["instance/absoluteUrl"](t.urls.medium_square_crop)},cover:function(){return this.artist.cover&&this.artist.cover.urls.original?this.artist.cover:this.artist.albums.map((function(t){return t.cover})).filter((function(t){return t&&t.urls.original}))[0]}}},o=l,c=a("2877"),u=Object(c["a"])(o,s,i,!1,null,null,null);e["a"]=u.exports},"047c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("track-table",{key:t.object.uploads_count,attrs:{"display-actions":!1,search:!0,filters:{playable:!0,library:t.object.uuid,ordering:"-creation_date"}}},[a("empty-state",{attrs:{slot:"empty-state"},slot:"empty-state"},[a("p",[t.isOwner?a("translate",{key:"1",attrs:{"translate-context":"*/*/*"}},[t._v("This library is empty, you should upload something in it!")]):a("translate",{key:"2",attrs:{"translate-context":"*/*/*"}},[t._v("You may need to follow this library to see its content.")])],1)])],1)],1)},i=[],r=a("5a65"),n={props:["object","isOwner"],components:{TrackTable:r["a"]}},l=n,o=a("2877"),c=Object(o["a"])(l,s,i,!1,null,null,null);e["default"]=c.exports},"05fe":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[t.header?a("h3",{staticClass:"ui header"},[t._t("title"),a("span",{staticClass:"ui tiny circular label"},[t._v(t._s(t.count))])],2):t._e(),t.search?a("inline-search-bar",{on:{search:function(e){t.objects=[],t.fetchData()}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}):t._e(),a("div",{staticClass:"ui hidden divider"}),a("div",{staticClass:"ui five app-cards cards"},[t.isLoading?a("div",{staticClass:"ui inverted active dimmer"},[a("div",{staticClass:"ui loader"})]):t._e(),t._l(t.objects,(function(t){return a("artist-card",{key:t.id,attrs:{artist:t}})}))],2),t.isLoading||0!==t.objects.length?t._e():t._t("empty-state",[a("empty-state",{attrs:{refresh:!0},on:{refresh:t.fetchData}})]),t.nextPage?[a("div",{staticClass:"ui hidden divider"}),t.nextPage?a("button",{class:["ui","basic","button"],on:{click:function(e){return t.fetchData(t.nextPage)}}},[a("translate",{attrs:{"translate-context":"*/*/Button,Label"}},[t._v("Show more")])],1):t._e()]:t._e()],2)},i=[],r=(a("99af"),a("2909")),n=a("5530"),l=a("bc3a"),o=a.n(l),c=a("0292"),u={props:{filters:{type:Object,required:!0},controls:{type:Boolean,default:!0},header:{type:Boolean,default:!0},search:{type:Boolean,default:!1}},components:{ArtistCard:c["a"]},data:function(){return{objects:[],limit:12,count:0,isLoading:!1,errors:null,previousPage:null,nextPage:null,query:""}},created:function(){this.fetchData()},methods:{fetchData:function(t){t=t||"artists/",this.isLoading=!0;var e=this,a=Object(n["a"])({q:this.query},this.filters);a.page_size=this.limit,a.offset=this.offset,o.a.get(t,{params:a}).then((function(t){e.previousPage=t.data.previous,e.nextPage=t.data.next,e.isLoading=!1,e.objects=[].concat(Object(r["a"])(e.objects),Object(r["a"])(t.data.results)),e.count=t.data.count}),(function(t){e.isLoading=!1,e.errors=t.backendErrors}))},updateOffset:function(t){t?this.offset+=this.limit:this.offset=Math.max(this.offset-this.limit,0)}},watch:{offset:function(){this.fetchData()},"$store.state.moderation.lastUpdate":function(){this.fetchData()}}},d=u,p=a("2877"),b=Object(p["a"])(d,s,i,!1,null,null,null);e["a"]=b.exports},"3c2f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("album-widget",{key:String(t.object.uploads_count),attrs:{header:!1,search:!0,controls:!1,filters:{playable:!0,ordering:"-creation_date",library:t.object.uuid}}},[a("empty-state",{attrs:{slot:"empty-state"},slot:"empty-state"},[a("p",[t.isOwner?a("translate",{key:"1",attrs:{"translate-context":"*/*/*"}},[t._v("This library is empty, you should upload something in it!")]):a("translate",{key:"2",attrs:{"translate-context":"*/*/*"}},[t._v("You may need to follow this library to see its content.")])],1)])],1)],1)},i=[],r=a("8356"),n={props:["object","isOwner"],components:{AlbumWidget:r["a"]}},l=n,o=a("2877"),c=Object(o["a"])(l,s,i,!1,null,null,null);e["default"]=c.exports},"4dda":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{directives:[{name:"title",rawName:"v-title",value:t.labels.title,expression:"labels.title"}]},[a("div",{staticClass:"ui vertical stripe segment container"},[t.isLoading?a("div",{staticClass:"ui centered active inline loader"}):t.object?a("div",{staticClass:"ui stackable grid"},[a("div",{staticClass:"ui five wide column"},[a("button",{directives:[{name:"dropdown",rawName:"v-dropdown",value:{direction:"downward"},expression:"{direction: 'downward'}"}],ref:"dropdown",staticClass:"ui pointing dropdown icon small basic right floated button",staticStyle:{position:"absolute",right:"1em",top:"1em"}},[a("i",{staticClass:"ellipsis vertical icon"}),a("div",{staticClass:"menu"},[t.object.actor.domain!=t.$store.getters["instance/domain"]?a("a",{staticClass:"basic item",attrs:{href:t.object.fid,target:"_blank"}},[a("i",{staticClass:"external icon"}),a("translate",{attrs:{"translate-params":{domain:t.object.actor.domain},"translate-context":"Content/*/Button.Label/Verb"}},[t._v("View on %{ domain }")])],1):t._e(),t._l(t.getReportableObjs({library:t.object}),(function(e){return a("div",{key:e.target.type+e.target.id,staticClass:"basic item",attrs:{role:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.$store.dispatch("moderation/report",e.target)}}},[a("i",{staticClass:"share icon"}),t._v(" "+t._s(e.label)+" ")])})),a("div",{staticClass:"divider"}),t.$store.state.auth.availablePermissions["moderation"]?a("router-link",{staticClass:"basic item",attrs:{to:{name:"manage.library.libraries.detail",params:{id:t.object.uuid}}}},[a("i",{staticClass:"wrench icon"}),a("translate",{attrs:{"translate-context":"Content/Moderation/Link"}},[t._v("Open in moderation interface")])],1):t._e()],2)]),a("h1",{staticClass:"ui header"},[a("div",{staticClass:"ui hidden divider"}),a("div",{staticClass:"ellipsis content"},[a("i",{staticClass:"layer group small icon"}),a("span",[t._v(t._s(t.object.name))]),a("div",{staticClass:"ui very small hidden divider"}),a("div",{staticClass:"sub header ellipsis",attrs:{title:t.object.full_username}},[a("actor-link",{attrs:{avatar:!1,actor:t.object.actor,"truncate-length":0}},[a("translate",{attrs:{"translate-context":"*/*/*","translate-params":{username:t.object.actor.full_username}}},[t._v("Owned by %{ username }")])],1)],1)])]),a("p",["me"===t.object.privacy_level?a("span",{attrs:{title:t.labels.tooltips.me}},[a("i",{staticClass:"lock icon"}),t._v(" "+t._s(t.labels.visibility.me)+" ")]):"instance"===t.object.privacy_level?a("span",{attrs:{title:t.labels.tooltips.instance}},[a("i",{staticClass:"lock open icon"}),t._v(" "+t._s(t.labels.visibility.instance)+" ")]):"everyone"===t.object.privacy_level?a("span",{attrs:{title:t.labels.tooltips.everyone}},[a("i",{staticClass:"globe icon"}),t._v(" "+t._s(t.labels.visibility.everyone)+" ")]):t._e(),t._v(" · "),a("i",{staticClass:"music icon"}),a("translate",{attrs:{"translate-context":"*/*/*","translate-params":{count:t.object.uploads_count},"translate-n":t.object.uploads_count,"translate-plural":"%{ count } tracks"}},[t._v("%{ count } track")]),t.object.size?a("span",[t._v(" · "),a("i",{staticClass:"database icon"}),t._v(" "+t._s(t._f("humanSize")(t.object.size))+" ")]):t._e()],1),a("div",{staticClass:"header-buttons"},[a("div",{staticClass:"ui small buttons"},[a("radio-button",{attrs:{disabled:!t.isPlayable,type:"library","object-id":t.object.uuid}})],1),t.isOwner?t._e():a("div",{staticClass:"ui small buttons"},[t.$store.state.auth.authenticated?a("library-follow-button",{attrs:{library:t.object}}):t._e()],1)]),"large"===t.$store.getters["ui/layoutVersion"]?[a("rendered-description",{attrs:{content:t.object.description?{html:t.object.description}:null,"update-url":"channels/"+t.object.uuid+"/","can-update":!1}}),a("div",{staticClass:"ui hidden divider"})]:t._e(),a("div",{staticClass:"ui form"},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"copy-input"}},[a("translate",{attrs:{"translate-context":"Content/Library/Title"}},[t._v("Sharing link")])],1),a("p",[a("translate",{attrs:{"translate-context":"Content/Library/Paragraph"}},[t._v("Share this link with other users so they can request access to this library by copy-pasting it in their pod search bar.")])],1),a("copy-input",{attrs:{value:t.object.fid}})],1)])],2),a("div",{staticClass:"ui eleven wide column"},[a("div",{staticClass:"ui head vertical stripe segment"},[a("div",{staticClass:"ui container"},[a("div",{staticClass:"ui secondary pointing center aligned menu"},[a("router-link",{staticClass:"item",attrs:{exact:!0,to:{name:"library.detail"}}},[a("translate",{attrs:{"translate-context":"*/*/*"}},[t._v("Artists")])],1),a("router-link",{staticClass:"item",attrs:{exact:!0,to:{name:"library.detail.albums"}}},[a("translate",{attrs:{"translate-context":"*/*/*"}},[t._v("Albums")])],1),a("router-link",{staticClass:"item",attrs:{exact:!0,to:{name:"library.detail.tracks"}}},[a("translate",{attrs:{"translate-context":"*/*/*"}},[t._v("Tracks")])],1),t.isOwner?a("router-link",{staticClass:"item",attrs:{exact:!0,to:{name:"library.detail.upload"}}},[a("i",{staticClass:"upload icon"}),a("translate",{attrs:{"translate-context":"Content/Library/Card.Button.Label/Verb"}},[t._v("Upload")])],1):t._e(),t.isOwner?a("router-link",{staticClass:"item",attrs:{exact:!0,to:{name:"library.detail.edit"}}},[a("i",{staticClass:"pencil icon"}),a("translate",{attrs:{"translate-context":"Content/*/Button.Label/Verb"}},[t._v("Edit")])],1):t._e()],1),a("div",{staticClass:"ui hidden divider"}),a("router-view",{attrs:{"is-owner":t.isOwner,object:t.object},on:{updated:t.fetchData,"uploads-finished":function(e){t.object.uploads_count+=e}}})],1)])])]):t._e()])])},i=[],r=(a("96cf"),a("1da1")),n=a("bc3a"),l=a.n(n),o=a("a3e6"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:["ui","pink",{inverted:t.isApproved||t.isPending},{favorited:t.isApproved},"icon","labeled","button"],on:{click:function(e){return e.stopPropagation(),t.toggle(e)}}},[a("i",{staticClass:"heart icon"}),t.isApproved?a("translate",{attrs:{"translate-context":"Content/Library/Card.Button.Label/Verb"}},[t._v("Unfollow")]):t.isPending?a("translate",{attrs:{"translate-context":"Content/Library/Card.Button.Label/Verb"}},[t._v("Cancel follow request")]):a("translate",{attrs:{"translate-context":"Content/Library/Card.Button.Label/Verb"}},[t._v("Follow")])],1)},u=[],d={props:{library:{type:Object}},computed:{isPending:function(){return this.follow&&null===this.follow.approved},isApproved:function(){return this.follow&&(!0===this.follow.approved||null===this.follow.approved&&"everyone"===this.library.privacy_level)},follow:function(){return this.$store.getters["libraries/follow"](this.library.uuid)}},methods:{toggle:function(){this.isApproved||this.isPending?this.$emit("unfollowed"):this.$emit("followed"),this.$store.dispatch("libraries/toggle",this.library.uuid)}}},p=d,b=a("2877"),h=Object(b["a"])(p,c,u,!1,null,null,null),m=h.exports,f=a("add5"),v=a("d4fd"),y={mixins:[f["a"]],props:["id"],components:{PlayButton:o["a"],RadioButton:v["a"],LibraryFollowButton:m},data:function(){return{isLoading:!0,object:null,latestTracks:null}},beforeRouteUpdate:function(t,e,a){t.meta.preserveScrollPosition=!0,a()},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:a=t.$store.state.auth.authenticated,a||t.$store.getters["instance/domain"]==t.object.actor.domain||t.$router.push({name:"login",query:{next:t.$route.fullPath}});case 4:case"end":return e.stop()}}),e)})))()},methods:{fetchData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,t.isLoading=!0,s=l.a.get("libraries/".concat(t.id)).then((function(t){a.object=t.data})),e.next=5,s;case 5:a.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}},computed:{isOwner:function(){return this.$store.state.auth.authenticated&&this.object.actor.full_username===this.$store.state.auth.fullUsername},labels:function(){return{title:this.$pgettext("*/*/*","Library"),visibility:{me:this.$pgettext("Content/Library/Card.Help text","Private"),instance:this.$pgettext("Content/Library/Card.Help text","Restricted"),everyone:this.$pgettext("Content/Library/Card.Help text","Public")},tooltips:{me:this.$pgettext("Content/Library/Card.Help text","This library is private and your approval from its owner is needed to access its content"),instance:this.$pgettext("Content/Library/Card.Help text","This library is restricted to users on this pod only"),everyone:this.$pgettext("Content/Library/Card.Help text","This library is public and you can access its content freely")}}},isPlayable:function(){return this.object.uploads_count>0&&(this.isOwner||"public"===this.object.privacy_level||"instance"===this.object.privacy_level&&this.$store.state.auth.authenticated&&this.object.actor.domain===this.$store.getters["instance/domain"]||!0===(this.$store.getters["libraries/follow"](this.object.uuid)||{}).approved)}},watch:{id:function(){this.fetchData()}}},g=y,_=Object(b["a"])(g,s,i,!1,null,null,null);e["default"]=_.exports},"6b08":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component-tags-list"},[t._l(t.toDisplay,(function(e){return a("router-link",{key:e,class:["ui","circular","hashtag","label",t.labelClasses],attrs:{to:{name:t.detailRoute,params:{id:e}}}},[t._v(" #"+t._s(t._f("truncate")(e,t.truncateSize))+" ")])})),t.showMore&&t.toDisplay.length<t.tags.length?a("div",{staticClass:"ui circular inverted accent label",attrs:{role:"button"},on:{click:function(e){e.preventDefault(),t.honorLimit=!1}}},[a("translate",{attrs:{"translate-context":"Content/*/Button/Label/Verb","translate-params":{count:t.tags.length-t.toDisplay.length},"translate-n":t.tags.length-t.toDisplay.length,"translate-plural":"Show %{ count } more tags"}},[t._v("Show 1 more tag")])],1):t._e()],2)},i=[],r=(a("fb6a"),a("a9e3"),{props:{tags:{type:Array,required:!0},showMore:{type:Boolean,default:!0},truncateSize:{type:Number,default:25},limit:{type:Number,default:5},labelClasses:{type:String,default:""},detailRoute:{type:String,default:"library.tags.detail"}},data:function(){return{honorLimit:!0}},computed:{toDisplay:function(){return this.honorLimit?(this.tags||[]).slice(0,this.limit):this.tags}}}),n=r,l=a("2877"),o=Object(l["a"])(n,s,i,!1,null,null,null);e["a"]=o.exports},8356:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[this.$slots.title?a("h3",{staticClass:"ui header"},[t._t("title"),t.showCount?a("span",{staticClass:"ui tiny circular label"},[t._v(t._s(t.count))]):t._e()],2):t._e(),t._t("default"),t.search?a("inline-search-bar",{on:{search:function(e){t.albums=[],t.fetchData()}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}):t._e(),a("div",{staticClass:"ui hidden divider"}),a("div",{staticClass:"ui app-cards cards"},[t.isLoading?a("div",{staticClass:"ui inverted active dimmer"},[a("div",{staticClass:"ui loader"})]):t._e(),t._l(t.albums,(function(t){return a("album-card",{key:t.id,attrs:{album:t}})}))],2),t.isLoading||0!==t.albums.length?t._e():t._t("empty-state",[a("empty-state",{attrs:{refresh:!0},on:{refresh:t.fetchData}})]),t.nextPage?[a("div",{staticClass:"ui hidden divider"}),t.nextPage?a("button",{class:["ui","basic","button"],on:{click:function(e){return t.fetchData(t.nextPage)}}},[a("translate",{attrs:{"translate-context":"*/*/Button,Label"}},[t._v("Show more")])],1):t._e()]:t._e()],2)},i=[],r=(a("99af"),a("a9e3"),a("2909")),n=a("5530"),l=a("bc3a"),o=a.n(l),c=a("af03"),u={props:{filters:{type:Object,required:!0},controls:{type:Boolean,default:!0},showCount:{type:Boolean,default:!1},search:{type:Boolean,default:!1},limit:{type:Number,default:12}},components:{AlbumCard:c["a"]},data:function(){return{albums:[],count:0,isLoading:!1,errors:null,previousPage:null,nextPage:null,query:""}},created:function(){this.fetchData()},methods:{fetchData:function(t){t=t||"albums/",this.isLoading=!0;var e=this,a=Object(n["a"])({q:this.query},this.filters);a.page_size=this.limit,a.offset=this.offset,o.a.get(t,{params:a}).then((function(t){e.previousPage=t.data.previous,e.nextPage=t.data.next,e.isLoading=!1,e.albums=[].concat(Object(r["a"])(e.albums),Object(r["a"])(t.data.results)),e.count=t.data.count}),(function(t){e.isLoading=!1,e.errors=t.backendErrors}))},updateOffset:function(t){t?this.offset+=this.limit:this.offset=Math.max(this.offset-this.limit,0)}},watch:{offset:function(){this.fetchData()},"$store.state.moderation.lastUpdate":function(){this.fetchData()}}},d=u,p=a("2877"),b=Object(p["a"])(d,s,i,!1,null,null,null);e["a"]=b.exports},af03:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card app-card component-album-card"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.imageUrl,expression:"imageUrl",arg:"background-image"}],class:["ui","head-image","image",{"default-cover":!t.album.cover||!t.album.cover.urls.original}],on:{click:function(e){return t.$router.push({name:"library.albums.detail",params:{id:t.album.id}})}}},[a("play-button",{attrs:{"icon-only":!0,"is-playable":t.album.is_playable,"button-classes":["ui","circular","large","vibrant","icon","button"],album:t.album}})],1),a("div",{staticClass:"content"},[a("strong",[a("router-link",{staticClass:"discrete link",attrs:{to:{name:"library.albums.detail",params:{id:t.album.id}}}},[t._v(" "+t._s(t.album.title)+" ")])],1),a("div",{staticClass:"description"},[a("span",[a("router-link",{staticClass:"discrete link",attrs:{to:{name:"library.artists.detail",params:{id:t.album.artist.id}}}},[t._v(" "+t._s(t.album.artist.name)+" ")])],1)])]),a("div",{staticClass:"extra content"},[a("translate",{attrs:{"translate-context":"*/*/*","translate-params":{count:t.album.tracks_count},"translate-n":t.album.tracks_count,"translate-plural":"%{ count } tracks"}},[t._v("%{ count } track")]),a("play-button",{staticClass:"right floated basic icon",attrs:{"dropdown-only":!0,"is-playable":t.album.is_playable,"dropdown-icon-classes":["ellipsis","horizontal","large really discrete"],album:t.album}})],1)])},i=[],r=a("a3e6"),n={props:{album:{type:Object}},components:{PlayButton:r["a"]},computed:{imageUrl:function(){if(this.album.cover&&this.album.cover.urls.original)return this.$store.getters["instance/absoluteUrl"](this.album.cover.urls.medium_square_crop)}}},l=n,o=a("2877"),c=Object(o["a"])(l,s,i,!1,null,null,null);e["a"]=c.exports},c92e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",["small"===t.$store.getters["ui/layoutVersion"]?[a("rendered-description",{attrs:{content:t.object.description?{html:t.object.description}:null,"update-url":"channels/"+t.object.uuid+"/","can-update":!1}}),a("div",{staticClass:"ui hidden divider"})]:t._e(),a("artist-widget",{key:t.object.uploads_count,ref:"artists",attrs:{header:!1,search:!0,controls:!1,filters:{playable:!0,ordering:"-creation_date",library:t.object.uuid}}},[a("empty-state",{attrs:{slot:"empty-state"},slot:"empty-state"},[a("p",[t.isOwner?a("translate",{key:"1",attrs:{"translate-context":"*/*/*"}},[t._v("This library is empty, you should upload something in it!")]):a("translate",{key:"2",attrs:{"translate-context":"*/*/*"}},[t._v("You may need to follow this library to see its content.")])],1)])],1)],2)},i=[],r=a("05fe"),n={props:["object","isOwner"],components:{ArtistWidget:r["a"]},data:function(){return{query:""}}},l=n,o=a("2877"),c=Object(o["a"])(l,s,i,!1,null,null,null);e["default"]=c.exports}}]);
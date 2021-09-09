(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{u9oG:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return d})),t.d(n,"default",(function(){return u}));var r=t("zLVn"),o=(t("q1tI"),t("7ljp")),s=t("Bl7J"),a=(t("Wbzz"),t("vrFN")),p=["components"],d={},m={_frontmatter:d},i=s.a;function u(e){var n=e.components,t=Object(r.a)(e,p);return Object(o.b)(i,Object.assign({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(a.a,{title:"Named Resolvers",keywords:["Morpheus GraphQL","GraphQL","Haskell"],mdxType:"SEO"}),Object(o.b)("h2",null,"Named Resolvers"),Object(o.b)("p",null,"this feature requres minimum Morpheus GraphQL version ",Object(o.b)("strong",{parentName:"p"},"0.18.0")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Posts.hs")),Object(o.b)("deckgo-highlight-code",{language:"hs",terminal:"carbon",theme:"one-dark","line-numbers":"true"},"\n          ",Object(o.b)("code",{parentName:"deckgo-highlight-code",slot:"code"},'newtype Post m = Post\n  { title :: m Text\n  }\n  deriving (Generic, GQLType)\n\ninstance Monad m => ResolveNamed m (Post (NamedResolverT m)) where\n  type Dep (Post (NamedResolverT m)) = ID\n  resolveNamed uid =\n    pure Post { title = resolve (getPostTitle uid)}\n\n-- QUERY\ndata Query m = Query\n  { posts :: m [Post m],\n    post :: Arg "id" ID -> m (Maybe (Post m))\n  }\n  deriving\n    ( Generic,\n      GQLType\n    )\n\ninstance Monad m => ResolveNamed m (Query (NamedResolverT m)) where\n  type Dep (Query (NamedResolverT m)) = ()\n  resolveNamed () =\n    pure\n      Query\n        { posts = resolve getPostIds,\n          post = \\(Arg arg) -> resolve (pure (Just arg))\n        }\n\npostsApp :: App () IO\npostsApp =\n  deriveApp\n    (NamedResolvers :: NamedResolvers IO () Query Undefined Undefined)'),"\n        "),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Authors.hs")),Object(o.b)("deckgo-highlight-code",{language:"hs",terminal:"carbon",theme:"one-dark","line-numbers":"true"},"\n          ",Object(o.b)("code",{parentName:"deckgo-highlight-code",slot:"code"},'data Author m = Author\n  { name :: m Text,\n    posts :: m [Post m]\n  } deriving (Generic, GQLType)\n\ninstance Monad m => ResolveNamed m (Author (NamedResolverT m)) where\n  type Dep (Author (NamedResolverT m)) = ID\n  resolveNamed uid =\n    pure\n      Author\n        { name = resolve (getAuthorName uid),\n          posts = resolve (getAuthorPosts uid)\n        }\n\n-- is alternative to extend type\nnewtype Post m = Post\n  { author :: m (Author m)\n  } deriving (Generic, GQLType)\n\ninstance Monad m => ResolveNamed m (Post (NamedResolverT m)) where\n  type Dep (Post (NamedResolverT m)) = ID\n  resolveNamed uid =\n    pure\n      Post\n        { author = resolve (pure uid)\n        }\n\n-- QUERY\ndata Query m = Query\n  { authors :: m [Author m],\n    authorById :: Arg "id" ID -> m (Maybe (Author m))\n  }\n  deriving (Generic, GQLType)\n\ninstance Monad m => ResolveNamed m (Query (NamedResolverT m)) where\n  type Dep (Query (NamedResolverT m)) = ()\n  resolveNamed () =\n    pure\n      Query\n        { authors = resolve getAuthorIds,\n          authorById = \\(Arg uid) -> resolve (pure (Just uid))\n        }\n\nauthorsApp :: App () IO\nauthorsApp =\n  deriveApp\n    (NamedResolvers :: NamedResolvers IO () Query Undefined Undefined)'),"\n        "),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"App.hs")),Object(o.b)("deckgo-highlight-code",{language:"hs",terminal:"carbon",theme:"one-dark","line-numbers":"true"},"\n          ",Object(o.b)("code",{parentName:"deckgo-highlight-code",slot:"code"},"app :: App () IO\napp = authorsApp <> postsApp"),"\n        "),Object(o.b)("p",null,"since the both ",Object(o.b)("inlineCode",{parentName:"p"},"Post")," type definitions have same dependency ",Object(o.b)("inlineCode",{parentName:"p"},"ID"),",\nthe interpreter safelly merge this two apps where type\n",Object(o.b)("inlineCode",{parentName:"p"},"Post")," will be extended with new field ",Object(o.b)("inlineCode",{parentName:"p"},"author"),"."))}u.isMDXComponent=!0},zLVn:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-named-resolvers-mdx-2e40dd11545e514accd6.js.map
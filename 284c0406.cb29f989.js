(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{163:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(o,".").concat(d)]||m[d]||l[d]||s;return n?r.a.createElement(b,c(c({ref:t},u),{},{components:n})):r.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<s;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),s=(n(0),n(163)),o={id:"namespace_resource_quota",title:"Namespace Resource Quota"},c={unversionedId:"design/namespace_resource_quota",id:"version-0.9.0/design/namespace_resource_quota",isDocsHomePage:!1,title:"Namespace Resource Quota",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/design/namespace_resource_quota.md",slug:"/design/namespace_resource_quota",permalink:"/docs/design/namespace_resource_quota",version:"0.9.0",sidebar:"version-0.9.0/docs",previous:{title:"Cross Queue Preemption",permalink:"/docs/design/cross_queue_preemption"},next:{title:"Pluggable App Management",permalink:"/docs/design/pluggable_app_management"}},i=[{value:"Best practice",id:"best-practice",children:[{value:"1. Setup namespace",id:"1-setup-namespace",children:[]},{value:"2. Setup YuniKorn queues",id:"2-setup-yunikorn-queues",children:[]},{value:"3. Mapping applications to queues &amp; namespace",id:"3-mapping-applications-to-queues--namespace",children:[]}]},{value:"Future Work",id:"future-work",children:[]}],u={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"In K8s, user can setup namespace with ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"}),"resource quotas")," to limit aggregated resource consumption in this namespace. The validation of namespace resource quotas is handled in api-server directly, therefore YuniKorn simply honors the quotas like the default scheduler."),Object(s.b)("h2",{id:"best-practice"},"Best practice"),Object(s.b)("p",null,"It is not mandatory to setup YuniKorn queues with respect of namespaces.\nHowever, in practice, it makes more sense to do so.\nNamespace is often used to set a cap for resource consumptions per user-group/team,\nYuniKorn queue is also meant to divide cluster resource into multiple groups.\nLet's go through an example."),Object(s.b)("h3",{id:"1-setup-namespace"},"1. Setup namespace"),Object(s.b)("p",null,"Namespace: ",Object(s.b)("inlineCode",{parentName:"p"},"advertisement"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'apiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: advertisement\nspec:\n  hard:\n    requests.cpu: "200m"\n    requests.memory: 2000Mi\n    limits.cpu: "200m"\n    limits.memory: 4000Mi\n')),Object(s.b)("p",null,"Create the namespace"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl create namespace advertisement\nkubectl create -f ./advertisement.yaml --namespace=advertisement\nkubectl get quota --namespace=advertisement\nkubectl describe quota advertisement --namespace=advertisement\n\n// output\nName:            advertisement\nNamespace:       advertisement\nResource         Used  Hard\n--------         ----  ----\nlimits.cpu       0     200m\nlimits.memory    0     4000Mi\nrequests.cpu     0     200m\nrequests.memory  0     2000Mi\n")),Object(s.b)("h3",{id:"2-setup-yunikorn-queues"},"2. Setup YuniKorn queues"),Object(s.b)("p",null,"Queue: ",Object(s.b)("inlineCode",{parentName:"p"},"advertisement"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"name: advertisement\nresources:\n  guaranteed:\n    vcore: 100\n    memory: 1000\n  max:\n    vcore: 200\n    memory: 2000\n")),Object(s.b)("p",null,"ensure ",Object(s.b)("inlineCode",{parentName:"p"},"QueueMaxResource <= NamespaceResourceQuotaRequests")),Object(s.b)("h3",{id:"3-mapping-applications-to-queues--namespace"},"3. Mapping applications to queues & namespace"),Object(s.b)("p",null,"In a pod spec"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'apiVersion: v1\nkind: Pod\nmetadata:\n  namespace: advertisement\n  labels:\n    app: sleep\n    applicationId: "application_2019_01_22_00001"\n    queue: "root.advertisement"\n  name: task0\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-5s\n      image: "alpine:latest"\n      command: ["/bin/ash", "-ec", "while :; do echo \'.\'; sleep 5 ; done"]\n      resources:\n        requests:\n          cpu: "50m"\n          memory: "800M"\n        limits:\n          cpu: "100m"\n          memory: "1000M"\n')),Object(s.b)("p",null,"Check Quota"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe quota advertisement --namespace=advertisement\n\nName:            advertisement\nNamespace:       advertisement\nResource         Used  Hard\n--------         ----  ----\nlimits.cpu       100m  200m\nlimits.memory    1G    4000Mi\nrequests.cpu     50m   200m\nrequests.memory  800M  2000Mi\n")),Object(s.b)("p",null,"Now submit another application,"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'apiVersion: v1\nkind: Pod\nmetadata:\n  namespace: advertisement\n  labels:\n    app: sleep\n    applicationId: "application_2019_01_22_00002"\n    queue: "root.advertisement"\n  name: task1\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-5s\n      image: "alpine:latest"\n      command: ["/bin/ash", "-ec", "while :; do echo \'.\'; sleep 5 ; done"]\n      resources:\n        requests:\n          cpu: "200m"\n          memory: "800M"\n        limits:\n          cpu: "200m"\n          memory: "1000M"\n')),Object(s.b)("p",null,"pod will not be able to submitted to api-server, because the requested cpu ",Object(s.b)("inlineCode",{parentName:"p"},"200m")," + used cpu ",Object(s.b)("inlineCode",{parentName:"p"},"100m")," = ",Object(s.b)("inlineCode",{parentName:"p"},"300m")," which exceeds the resource quota."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'kubectl create -f pod_ns_adv_task1.yaml\nError from server (Forbidden): error when creating "pod_ns_adv_task1.yaml": pods "task1" is forbidden: exceeded quota: advertisement, requested: limits.cpu=200m,requests.cpu=200m, used: limits.cpu=100m,requests.cpu=50m, limited: limits.cpu=200m,requests.cpu=200m\n')),Object(s.b)("h2",{id:"future-work"},"Future Work"),Object(s.b)("p",null,"For compatibility, we should respect namespaces and resource quotas.\nResource quota is overlapped with queue configuration in many ways,\nfor example the ",Object(s.b)("inlineCode",{parentName:"p"},"requests")," quota is just like queue's max resource. However,\nthere are still a few features resource quota can do but queue cannot, such as"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Resource ",Object(s.b)("inlineCode",{parentName:"li"},"limits"),". The aggregated resource from all pods in a namespace cannot exceed this limit."),Object(s.b)("li",{parentName:"ol"},"Storage Resource Quota, e.g storage size, PVC number, etc."),Object(s.b)("li",{parentName:"ol"},"Object Count Quotas, e.g count of PVCs, services, configmaps, etc."),Object(s.b)("li",{parentName:"ol"},"Resource Quota can map to priority class.")),Object(s.b)("p",null,"Probably we can build something similar to cover (3) in this list.\nBut it would be hard to completely support all these cases."),Object(s.b)("p",null,"But currently, setting applications mapping to a queue as well as a corresponding namespace is over complex.\nSome future improvements might be:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Automatically detects namespaces in k8s-shim and map them to queues. Behind the scenes, we automatically generates queue configuration based on namespace definition. Generated queues are attached under root queue."),Object(s.b)("li",{parentName:"ol"},"When new namespace added/updated/removed, similarly to (1), we automatically update queues."),Object(s.b)("li",{parentName:"ol"},"User can add more configuration to queues, e.g add queue ACL, add child queues on the generated queues."),Object(s.b)("li",{parentName:"ol"},"Applications submitted to namespaces are transparently submitted to corresponding queues.")))}p.isMDXComponent=!0}}]);
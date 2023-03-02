export function initRoutes(data, sub) {
    data.forEach(item => {
        const routesObj = {
            path: item.url,//请假审批
            name: item.name,
            component: () => import(`../views/Home/${item.component}/index.vue`)
        }
        if (sub instanceof Array) {
            sub.push(routesObj);
        } else {
            if (!sub.children) {
                sub.children = [];
            };
            sub.children.push(routesObj)
        }

        if (item.children) {
            initRoutes(item.children, routesObj);
        }
    });
}

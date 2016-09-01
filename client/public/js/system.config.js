(function(global) {
    var ngVer = '@2.0.0-rc.5'; // lock in the angular package version; do not let it float to current!
    var routerVer = '@3.0.0-rc.1'; // lock router version
    var formsVer = '@0.3.0'; // lock forms version

    var  map = {
        'app':                        'app',

        '@angular':                   'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
        '@angular/router':            'https://npmcdn.com/@angular/router' + routerVer,
        '@angular/forms':             'https://npmcdn.com/@angular/forms' + formsVer,
        'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
        'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
        'ts':                         'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript':                 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js',
    };

    var packages = {
        'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router-deprecated',
        'upgrade',
    ];

    ngPackageNames.forEach(function(pkgName) {
        map['@angular/'+pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
    });

    ngPackageNames.forEach(function(pkgName) {

        packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };

        //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

    packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };

    var config = {
        transpiler: 'ts',
        defaultJSExtensions: true,
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        map: map,
        packages: packages
    };

    System.config(config);

})(this);
import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '7027caae158b4b93806dcecb017b603e'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: 'ea454efad75e465c8d9fd832806db2d1'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '0c67be59fc304c9ba056328eb5d9f7d8'
                    }
                    'x_snc_magic_elf/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'b5cc7e5008be47c593c507ec5b506702'
                    }
                    'x_snc_magic_elf/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '2a7e0a7c9c9149c9aa9e0a1eb2d52233'
                    }
                }
            }
        }
    }
}

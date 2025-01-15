const messages = {
  pt: {
    translations: {
      signup: {
        title: "Registreren",
        toasts: {
          success: "Gebruiker succesvol aangemaakt! U kunt nu inloggen!!!",
          fail: "Fout bij het aanmaken van gebruiker. Controleer de ingevoerde gegevens."
        },
        form: {
          name: "Naam",
          email: "E-mail",
          password: "Wachtwoord"
        },
        buttons: {
          submit: "Registreren",
          login: "Heeft u al een account? Log in!"
        }
      },
      login: {
        title: "Inloggen",
        form: {
          email: "E-mail",
          password: "Wachtwoord",
        },
        buttons: {
          submit: "Inloggen",
          register: "Registreer nu meteen!",
        },
      },
      plans: {
        form: {
          name: "Naam",
          users: "Gebruikers",
          connections: "Verbindingen",
          campaigns: "Campagnes",
          schedules: "Planning",
          enabled: "Ingeschakeld",
          disabled: "Uitgeschakeld",
          clear: "Annuleren",
          delete: "Verwijderen",
          save: "Opslaan",
          yes: "Ja",
          no: "Nee",
          money: "€"
        }
      },
      companies: {
        title: "Bedrijf registreren",
        form: {
          name: "Bedrijfsnaam",
          plan: "Abonnement",
          token: "Token",
          submit: "Registreren",
          success: "Bedrijf succesvol aangemaakt!",
        },
      },
      auth: {
        toasts: {
          success: "Succesvol ingelogd!",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Afspraken vandaag: ",
          },
        },
      },
      connections: {
        title: "Verbindingen",
        toasts: {
          deleted: "WhatsApp-verbinding succesvol verwijderd!",
        },
        confirmationModal: {
          deleteTitle: "Verwijderen",
          deleteMessage: "Weet u het zeker? Deze actie kan niet ongedaan worden gemaakt.",
          disconnectTitle: "Verbinding verbreken",
          disconnectMessage: "Weet u het zeker? U zult de QR-code opnieuw moeten scannen.",
        },
        buttons: {
          add: "WhatsApp toevoegen",
          disconnect: "verbinding verbreken",
          tryAgain: "Opnieuw proberen",
          qrcode: "QR-CODE",
          newQr: "Nieuwe QR-CODE",
          connecting: "Verbinding maken",
        },
        toolTips: {
          disconnected: {
            title: "Kan WhatsApp-sessie niet starten",
            content: "Zorg ervoor dat uw telefoon verbonden is met internet en probeer het opnieuw, of vraag een nieuwe QR-code aan",
          },
          qrcode: {
            title: "Wachten op QR-code scan",
            content: "Klik op de 'QR-CODE' knop en scan de QR-code met uw telefoon om de sessie te starten",
          },
          connected: {
            title: "Verbinding tot stand gebracht!",
          },
          timeout: {
            title: "Verbinding met telefoon is verbroken",
            content: "Zorg ervoor dat uw telefoon verbonden is met internet en WhatsApp is geopend, of klik op de 'Verbinding verbreken' knop om een nieuwe QR-code te krijgen",
          },
        },
        table: {
          name: "Naam",
          number: "Nummer",
          status: "Status",
          lastUpdate: "Laatste update",
          default: "Standaard",
          actions: "Acties",
          session: "Sessie",
        },
      },
      whatsappModal: {
        title: {
          add: "WhatsApp toevoegen",
          edit: "WhatsApp bewerken"
        },
        tabs: {
          general: "Algemeen",
          messages: "Berichten",
          assessments: "Beoordelingen",
          integrations: "Integraties",
          schedules: "Werktijden",
        },
        form: {
          name: "Naam",
          default: "Standaard",
          sendIdQueue: "Wachtrij",
          timeSendQueue: "Doorsturen naar wachtrij na X minuten",
          queueRedirection: "Wachtrij doorverwijzing",
          outOfHoursMessage: "Bericht buiten werktijd",
          queueRedirectionDesc: "Selecteer een wachtrij waarnaar contacten zonder wachtrij worden doorverwezen",
          prompt: "Prompt",
          expiresTicket: "Sluit open chats na x minuten",
          expiresInactiveMessage: "Bericht bij sluiting wegens inactiviteit",
          greetingMessage: "Begroetingsbericht",
          complationMessage: "Afsluitingsbericht"
        },
        buttons: {
          okAdd: "Toevoegen",
          okEdit: "Opslaan",
          cancel: "Annuleren"
        },
        success: "WhatsApp succesvol opgeslagen"
      },
      qrCode: {
        message: "Scan de QR-code om de sessie te starten",
      },
      contacts: {
        title: "Contacten",
        toasts: {
          deleted: "Contact succesvol verwijderd!",
          deletedAll: "Alle contacten succesvol verwijderd!"
        },
        searchPlaceholder: "Zoeken...",
        confirmationModal: {
          deleteTitle: "Verwijderen",
          deleteAllTitle: "Alles verwijderen",
          importTitle: "Contacten importeren",
          deleteMessage: "Weet u zeker dat u dit contact wilt verwijderen? Alle gerelateerde tickets gaan verloren.",
          deleteAllMessage: "Weet u zeker dat u alle contacten wilt verwijderen? Alle gerelateerde tickets gaan verloren.",
          importMessage: "Wilt u alle contacten van de telefoon importeren?",
          importTitlte: "Contacten importeren",
          importDetails: "Deze actie importeert de opgeslagen contacten uit WhatsApp. Sommige modellen staan dit mogelijk niet toe of het hangt af van uw privacy-instellingen! Controleer het resultaat binnen 1 uur."
        },
        buttons: {
          import: "Contacten importeren",
          importSheet: "Excel importeren",
          add: "Contact toevoegen",
          export: "Contacten exporteren",
          delete: "Alle contacten verwijderen"
        },
        table: {
          name: "Naam",
          whatsapp: "WhatsApp",
          email: "E-mail",
          actions: "Acties"
        }
      },
      queueIntegrationModal: {
        title: {
          add: "Project toevoegen",
          edit: "Project bewerken",
        },
        form: {
          id: "ID",
          type: "Type",
          name: "Naam",
          projectName: "Projectnaam",
          language: "Taal",
          jsonContent: "JsonContent",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tijd in minuten voordat een gesprek verloopt",
          typebotKeywordFinish: "Woord om ticket af te sluiten",
          typebotKeywordRestart: "Woord om flow te herstarten",
          typebotRestartMessage: "Bericht bij herstart gesprek",
          typebotUnknownMessage: "Bericht bij ongeldige optie",
          typebotDelayMessage: "Interval (ms) tussen berichten",
        },
        buttons: {
          okAdd: "Toevoegen",
          okEdit: "Opslaan",
          cancel: "Annuleren",
          test: "Bot testen",
        },
        messages: {
          testSuccess: "Integratie succesvol getest!",
          addSuccess: "Integratie succesvol toegevoegd.",
          editSuccess: "Integratie succesvol bewerkt.",
        },
      },
      sideMenu: {
        name: "Initieel zijmenu",
        note: "Indien ingeschakeld start het zijmenu gesloten",
        options: {
          enabled: "Geopend",
          disabled: "Gesloten",
        },
      },
      promptModal: {
        form: {
          name: "Naam",
          prompt: "Prompt",
          voice: "Stem",
          max_tokens: "Maximum tokens in antwoord",
          temperature: "Temperatuur",
          apikey: "API-sleutel",
          max_messages: "Maximum aantal berichten in geschiedenis",
          voiceKey: "Stem API-sleutel",
          voiceRegion: "Stemregio",
        },
        success: "Prompt succesvol opgeslagen!",
        title: {
          add: "Prompt toevoegen",
          edit: "Prompt bewerken",
        },
        buttons: {
          okAdd: "Toevoegen",
          okEdit: "Opslaan",
          cancel: "Annuleren",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Naam",
          queue: "Afdeling/Wachtrij",
          max_tokens: "Maximum tokens antwoord",
          actions: "Acties",
        },
        confirmationModal: {
          deleteTitle: "Verwijderen",
          deleteMessage: "Weet u het zeker? Deze actie kan niet ongedaan worden gemaakt!",
        },
        buttons: {
          add: "Prompt toevoegen",
        },
        contactModal: {
          title: {
            add: "Contact toevoegen",
            edit: "Contact bewerken",
          },
          form: {
            mainInfo: "Contactgegevens",
            extraInfo: "Extra informatie",
            name: "Naam",
            number: "WhatsApp nummer",
            email: "E-mail",
            extraName: "Veldnaam",
            extraValue: "Waarde",
            whatsapp: "Bronverbinding: "
          },
          buttons: {
            addExtraInfo: "Informatie toevoegen",
            okAdd: "Toevoegen",
            okEdit: "Opslaan",
            cancel: "Annuleren",
          },
          success: "Contact succesvol opgeslagen.",
        },
        queueModal: {
          title: {
            add: "Wachtrij toevoegen",
            edit: "Wachtrij bewerken",
          },
          confirmationModal: {
            "deleteTitle": "Verwijderen",
          },
          form: {
            name: "Naam",
            color: "Kleur",
            greetingMessage: "Begroetingsbericht",
            complationMessage: "Afsluitingsbericht",
            outOfHoursMessage: "Bericht buiten werktijd",
            ratingMessage: "Beoordelingsbericht",
            token: "Token",
            orderQueue: "Wachtrij volgorde (Bot)",
            integrationId: "Integratie",
          },
          buttons: {
            okAdd: "Toevoegen",
            okEdit: "Opslaan",
            cancel: "Annuleren",
            attach: "Bestand bijvoegen",
          },
        },
        userModal: {
          title: {
            add: "Gebruiker toevoegen",
            edit: "Gebruiker bewerken",
          },
          form: {
            name: "Naam",
            email: "E-mail",
            password: "Wachtwoord",
            profile: "Profiel",
            whatsapp: "Standaard verbinding",
            allTicket: "Ticket zonder wachtrij [Onzichtbaar]",
            allTicketEnabled: "Ingeschakeld",
            allTicketDesabled: "Uitgeschakeld",
          },
          buttons: {
            okAdd: "Toevoegen",
            okEdit: "Opslaan",
            cancel: "Annuleren",
          },
          success: "Gebruiker succesvol opgeslagen.",
        },
        scheduleModal: {
          title: {
            add: "Nieuwe planning",
            edit: "Planning bewerken",
          },
          form: {
            body: "Bericht",
            contact: "Contact",
            sendAt: "Geplande datum",
            sentAt: "Verzenddatum",
          },
          buttons: {
            okAdd: "Toevoegen",
            okEdit: "Opslaan",
            cancel: "Annuleren",
          },
          success: "Planning succesvol opgeslagen.",
        },
        tagModal: {
          title: {
            add: "Nieuwe tag",
            edit: "Tag bewerken",
          },
          form: {
            name: "Naam",
            color: "Kleur",
          },
          buttons: {
            okAdd: "Toevoegen",
            okEdit: "Opslaan",
            cancel: "Annuleren",
          },
          success: "Tag succesvol opgeslagen.",
        },
        chat: {
          noTicketMessage: "Selecteer een ticket om te beginnen met chatten.",
        },
        uploads: {
          titles: {
            titleUploadMsgDragDrop: "SLEEP EN PLAATS BESTANDEN IN HET ONDERSTAANDE VELD",
            titleFileList: "Bestandslijst"
          },
        },
        ticketsManager: {
          buttons: {
            newTicket: "Nieuw",
            closeallTicket: "Sluiten"
          },
        },
        ticketsQueueSelect: {
          placeholder: "Wachtrijen",
        },
        tickets: {
          inbox: {
            closedAllTickets: "Alle tickets sluiten?",
            closedAll: "Alles sluiten",
            newTicket: "Nieuw ticket",
            yes: "JA",
            no: "NEE",
            open: "Open",
            resolverd: "Opgelost",
          },
          toasts: {
            deleted: "Het gesprek waar u mee bezig was is verwijderd.",
          },
          notification: {
            message: "Bericht van",
          },
          tabs: {
            open: { title: "Open" },
            closed: { title: "Opgelost" },
            search: { title: "Zoeken" },
          },
          search: {
            placeholder: "Zoek gesprekken en berichten",
            filterConnections: "Filter op verbindingen",
            filterContacts: "Filter op contact",
            filterConections: "Filter op verbinding",
            filterConectionsOptions: {
              open: "Open",
              closed: "Gesloten",
              pending: "In behandeling",
            },
            filterUsers: "Filter op gebruikers",
            ticketsPerPage: "Tickets per pagina"
          },
          buttons: {
            showAll: "Alles",
          },
        },
        transferTicketModal: {
          title: "Ticket overdragen",
          fieldLabel: "Type om gebruikers te zoeken",
          fieldQueueLabel: "Overdragen naar wachtrij",
          fieldQueuePlaceholder: "Selecteer een wachtrij",
          noOptions: "Geen gebruikers gevonden met deze naam",
          buttons: {
            ok: "Overdragen",
            cancel: "Annuleren",
          },
        },
        ticketsList: {
          pendingHeader: "In afwachting",
          assignedHeader: "In behandeling",
          noTicketsTitle: "Niets hier!",
          noTicketsMessage: "Geen gesprekken gevonden met deze status of zoekterm",
          buttons: {
            accept: "Accepteren",
            closed: "Afronden",
            transfer: "Overdragen",
            reopen: "Heropenen"
          },
        },
        newTicketModal: {
          title: "Ticket aanmaken",
          fieldLabel: "Type om contact te zoeken",
          add: "Toevoegen",
          buttons: {
            ok: "Opslaan",
            cancel: "Annuleren",
          },
        },
        mainDrawer: {
          listItems: {
            dashboard: "Dashboard",
            connections: "Verbindingen",
            tickets: "Gesprekken",
            quickMessages: "Snelle antwoorden",
            contacts: "Contacten",
            queues: "Wachtrijen & Chatbot",
            tags: "Tags",
            administration: "Beheer",
            users: "Gebruikers",
            settings: "Instellingen",
            helps: "Help",
            messagesAPI: "API",
            schedules: "Planning",
            campaigns: "Campagnes",
            annoucements: "Mededelingen",
            chats: "Interne chat",
            financeiro: "Financieel",
            files: "Bestandenlijst",
            prompts: "Open.Ai",
            reports: "Rapporten",
            queueIntegration: "Integraties",
          },
          appBar: {
            notRegister: "Geen meldingen",
            user: {
              profile: "Profiel",
              logout: "Uitloggen",
            },
          },
        },
        queueIntegration: {
          title: "Integraties",
          table: {
            id: "ID",
            type: "Type",
            name: "Naam",
            projectName: "Projectnaam",
            language: "Taal",
            lastUpdate: "Laatste update",
            actions: "Acties",
          },
          buttons: {
            add: "Project toevoegen",
          },
          searchPlaceholder: "Zoeken...",
          confirmationModal: {
            deleteTitle: "Verwijderen",
            deleteMessage: "Weet u het zeker? Deze actie kan niet ongedaan worden gemaakt! Het wordt verwijderd uit de gekoppelde wachtrijen en verbindingen",
          },
        },
        reports: {
          title: "Gespreksrapporten",
          table: {
            id: "Ticket",
            user: "Gebruiker",
            dateOpen: "Openingsdatum",
            dateClose: "Sluitingsdatum",
            NPS: "NPS",
            status: "Status",
            whatsapp: "Verbinding",
            queue: "Wachtrij",
            actions: "Acties",
            lastMessage: "Laatste bericht",
            contact: "Klant",
            supportTime: "Gespreksduur"
          },
          buttons: {
            filter: "Filter toepassen",
          },
          searchPlaceholder: "Zoeken...",
        },
        files: {
          title: "Bestandenlijst",
          table: {
            name: "Naam",
            contacts: "Contacten",
            actions: "Actie",
          },
          toasts: {
            deleted: "Lijst succesvol verwijderd!",
            deletedAll: "Alle lijsten zijn succesvol verwijderd!",
          },
          buttons: {
            add: "Toevoegen",
            deleteAll: "Alles verwijderen",
          },
          confirmationModal: {
            deleteTitle: "Verwijderen",
            deleteAllTitle: "Alles verwijderen",
            deleteMessage: "Weet u zeker dat u deze lijst wilt verwijderen?",
            deleteAllMessage: "Weet u zeker dat u alle lijsten wilt verwijderen?",
          },
        },
        messagesAPI: {
          title: "API",
          textMessage: {
            number: "Nummer",
            body: "Bericht",
            token: "Geregistreerde token",
          },
          mediaMessage: {
            number: "Nummer",
            body: "Bestandsnaam",
            media: "Bestand",
            token: "Geregistreerde token",
          },
        },
        notifications: {
          noTickets: "Geen meldingen.",
        },
        quickMessages: {
          title: "Snelle antwoorden",
          searchPlaceholder: "Zoeken...",
          noAttachment: "Geen bijlage",
          confirmationModal: {
            deleteTitle: "Verwijderen",
            deleteMessage: "Deze actie kan niet ongedaan worden gemaakt! Wilt u doorgaan?",
          },
          buttons: {
            add: "Toevoegen",
            attach: "Bestand bijvoegen",
            cancel: "Annuleren",
            edit: "Bewerken",
          },
          toasts: {
            success: "Snelkoppeling succesvol toegevoegd!",
            deleted: "Snelkoppeling succesvol verwijderd!",
          },
          dialog: {
            title: "Snel bericht",
            shortcode: "Snelkoppeling",
            message: "Antwoord",
            save: "Opslaan",
            cancel: "Annuleren",
            geral: "Bewerken toestaan",
            add: "Toevoegen",
            edit: "Bewerken",
            visao: "Weergave toestaan",
            geral: 'Globaal',
          },
          table: {
            shortcode: "Snelkoppeling",
            message: "Bericht",
            actions: "Acties",
            mediaName: "Bestandsnaam",
            status: 'Globaal',
          },
        },
        messageVariablesPicker: {
          label: "Beschikbare variabelen",
          vars: {
            contactFirstName: "Voornaam",
            contactName: "Naam",
            greeting: "Begroeting",
            protocolNumber: "Protocol",
            date: "Datum",
            hour: "Tijd",
          },
        },
        contactLists: {
          title: "Contactlijsten",
          table: {
            name: "Naam",
            contacts: "Contacten",
            actions: "Acties",
          },
          buttons: {
            add: "Nieuwe lijst",
          },
          dialog: {
            name: "Naam",
            company: "Bedrijf",
            okEdit: "Bewerken",
            okAdd: "Toevoegen",
            add: "Toevoegen",
            edit: "Bewerken",
            cancel: "Annuleren",
          },
          confirmationModal: {
            deleteTitle: "Verwijderen",
            deleteMessage: "Deze actie kan niet ongedaan worden gemaakt.",
          },
          toasts: {
            deleted: "Record verwijderd",
          },
        },
        contactListItems: {
          title: "Contacten",
          searchPlaceholder: "Zoeken",
          buttons: {
            add: "Nieuw",
            lists: "Lijsten",
            import: "Importeren",
          },
          dialog: {
            name: "Naam",
            number: "Nummer",
            whatsapp: "WhatsApp",
            email: "E-mail",
            okEdit: "Bewerken",
            okAdd: "Toevoegen",
            add: "Toevoegen",
            edit: "Bewerken",
            cancel: "Annuleren",
          },
          table: {
            name: "Naam",
            number: "Nummer",
            whatsapp: "WhatsApp",
            email: "E-mail",
            actions: "Acties",
          },
          confirmationModal: {
            deleteTitle: "Verwijderen",
            deleteMessage: "Deze actie kan niet ongedaan worden gemaakt.",
            importMessage: "Wilt u de contacten uit dit werkblad importeren? ",
            importTitlte: "Importeren",
          },
          toasts: {
            deleted: "Record verwijderd",
          },
        },
        campaigns: {
          title: "Campagnes",
          searchPlaceholder: "Zoeken",
          buttons: {
            add: "Nieuwe campagne",
            contactLists: "Contactlijsten",
          },
          table: {
            name: "Naam",
            whatsapp: "Verbinding",
            contactList: "Contactlijst",
            status: "Status", 
            scheduledAt: "Planning",
            completedAt: "Voltooid",
            confirmation: "Bevestiging",
            actions: "Acties",
          },
          dialog: {
            new: "Nieuwe campagne",
            update: "Campagne bewerken",
            readonly: "Alleen bekijken",
            form: {
              name: "Naam",
              message1: "Bericht 1",
              message2: "Bericht 2", 
              message3: "Bericht 3",
              message4: "Bericht 4",
              message5: "Bericht 5",
              confirmationMessage1: "Bevestigingsbericht 1",
              confirmationMessage2: "Bevestigingsbericht 2",
              confirmationMessage3: "Bevestigingsbericht 3", 
              confirmationMessage4: "Bevestigingsbericht 4",
              confirmationMessage5: "Bevestigingsbericht 5",
              messagePlaceholder: "Berichtinhoud",
              whatsapp: "Verbinding",
              status: "Status",
              scheduledAt: "Planning",
              confirmation: "Bevestiging",
              contactList: "Contactlijst",
              tagList: "Taglijst",
              fileList: "Bestandenlijst"
            },
            buttons: {
              add: "Toevoegen",
              edit: "Bijwerken",
              okadd: "Ok",
              cancel: "Verzending annuleren",
              restart: "Verzending herstarten",
              close: "Sluiten",
              attach: "Bestand bijvoegen",
            },
          },
          confirmationModal: {
            deleteTitle: "Verwijderen",
            deleteMessage: "Deze actie kan niet ongedaan worden gemaakt.",
          },
          toasts: {
            success: "Operatie succesvol uitgevoerd",
            cancel: "Campagne geannuleerd",
            restart: "Campagne herstart",
            deleted: "Record verwijderd",
          },
        },
        announcements: {
          active: 'Actief',
          inactive: 'Inactief',
          title: "Mededelingen",
          searchPlaceholder: "Zoeken",
          buttons: {
            add: "Nieuwe mededeling",
            contactLists: "Mededelingenlijsten",
          },
          table: {
            priority: "Prioriteit",
            title: "Titel",
            text: "Tekst",
            mediaName: "Bestand",
            status: "Status",
            actions: "Acties",
          },
          dialog: {
            edit: "Mededeling bewerken",
            add: "Nieuwe mededeling",
            update: "Mededeling bewerken",
            readonly: "Alleen bekijken",
            form: {
              priority: "Prioriteit",
              title: "Titel",
              text: "Tekst",
              mediaPath: "Bestand",
              status: "Status",
            },
            buttons: {
              add: "Toevoegen",
              edit: "Bijwerken",
              okadd: "Ok",
              cancel: "Annuleren",
              close: "Sluiten",
              attach: "Bestand bijvoegen",
            },
          },
          confirmationModal: {
            deleteTitle: "Verwijderen",
            deleteMessage: "Deze actie kan niet ongedaan worden gemaakt.",
          },
          toasts: {
            success: "Operatie succesvol uitgevoerd",
            deleted: "Record verwijderd",
          },
        },
        campaignsConfig: {
          title: "Campagne-instellingen",
        },
        queues: {
          title: "Wachtrijen & Chatbot",
          table: {
            id: "ID",
            name: "Naam",
            color: "Kleur",
            greeting: "Begroetingsbericht",
            actions: "Acties",
            orderQueue: "Wachtrij volgorde (bot)",
          },
          buttons: {
            add: "Wachtrij toevoegen",
          },
          confirmationModal: {
            deleteTitle: "Verwijderen",
            deleteMessage: "Weet u het zeker? Deze actie kan niet ongedaan worden gemaakt! De gesprekken in deze wachtrij blijven bestaan, maar hebben geen wachtrij meer toegewezen.",
          },
        },
        queueSelect: {
          inputLabel: "Wachtrijen",
        },
        users: {
          title: "Gebruikers",
          table: {
            id: "ID",
            name: "Naam",
            status: "Status",
            email: "E-mail",
            profile: "Profiel",
            actions: "Acties",
          },
          status: {
            online: "Online gebruikers",
            offline: "Offline gebruikers",
          },
          buttons: {
            add: "Gebruiker toevoegen",
          },
          toasts: {
            deleted: "Gebruiker succesvol verwijderd.",
          },
          confirmationModal: {
            deleteTitle: "Verwijderen",
            deleteMessage: "Alle gebruikersgegevens gaan verloren. Open gesprekken van deze gebruiker worden verplaatst naar de wachtrij.",
          },
        },
        helps: {
          title: "Helpcentrum",
        },
        schedules: {
          title: "Planning",
          confirmationModal: {
            deleteTitle: "Weet u zeker dat u deze planning wilt verwijderen?",
            deleteMessage: "Deze actie kan niet ongedaan worden gemaakt.",
          },
          table: {
            contact: "Contact",
            body: "Bericht",
            sendAt: "Geplande datum",
            sentAt: "Verzenddatum",
            status: "Status",
            actions: "Acties",
          },
          buttons: {
            add: "Nieuwe planning",
          },
          toasts: {
            deleted: "Planning succesvol verwijderd.",
          },
        },
        tags: {
          title: "Tags",
          confirmationModal: {
            deleteTitle: "Weet u zeker dat u deze tag wilt verwijderen?",
            deleteMessage: "Deze actie kan niet ongedaan worden gemaakt.",
            deleteAllMessage: "Weet u zeker dat u alle tags wilt verwijderen?",
            deleteAllTitle: "Alles verwijderen",
          },
          table: {
            name: "Naam",
            color: "Kleur",
            tickets: "Getagde records",
            actions: "Acties",
          },
          buttons: {
            add: "Nieuwe tag",
            deleteAll: "Alles verwijderen",
          },
          toasts: {
            deletedAll: "Alle tags succesvol verwijderd!",
            deleted: "Tag succesvol verwijderd.",
          },
        },
        settings: {
          success: "Instellingen succesvol opgeslagen.",
          title: "Instellingen",
          settings: {
            userCreation: {
              name: "Gebruiker aanmaken",
              options: {
                enabled: "Ingeschakeld",
                disabled: "Uitgeschakeld",
              },
            },
          },
        },
        messagesList: {
          header: {
            assignedTo: "Toegewezen aan:",
            buttons: {
              return: "Terug",
              resolve: "Oplossen",
              reopen: "Heropenen",
              accept: "Accepteren",
            },
          },
        },
        messagesInput: {
          placeholderOpen: "Type een bericht",
          placeholderClosed: "Heropen of accepteer dit ticket om een bericht te sturen.",
          signMessage: "Ondertekenen",
        },
        contactDrawer: {
          header: "Contactgegevens",
          buttons: {
            edit: "Contact bewerken",
          },
          extraInfo: "Overige informatie",
        },
        fileModal: {
          title: {
            add: "Bestandenlijst toevoegen",
            edit: "Bestandenlijst bewerken",
          },
          buttons: {
            okAdd: "Opslaan",
            okEdit: "Bewerken",
            cancel: "Annuleren",
            fileOptions: "Bestand toevoegen",
          },
          form: {
            name: "Naam bestandenlijst",
            message: "Lijst details",
            fileOptions: "Bestandenlijst",
            extraName: "Bericht om met bestand te verzenden",
            extraValue: "Optiewaarde",
          },
          success: "Bestandenlijst succesvol opgeslagen!",
        },
        ticketOptionsMenu: {
          schedule: "Planning",
          delete: "Verwijderen",
          transfer: "Overdragen",
          registerAppointment: "Contact opmerkingen",
          appointmentsModal: {
            title: "Contact opmerkingen",
            textarea: "Opmerking",
            placeholder: "Voer hier de informatie in die u wilt registreren",
          },
          confirmationModal: {
            title: "Ticket verwijderen",
            titleFrom: "van contact ",
            message: "Let op! Alle berichten gerelateerd aan het ticket gaan verloren.",
          },
          buttons: {
            delete: "Verwijderen",
            cancel: "Annuleren",
          },
        },
        confirmationModal: {
          buttons: {
            confirm: "Ok",
            cancel: "Annuleren",
          },
        },
        messageOptionsMenu: {
          delete: "Verwijderen",
          reply: "Beantwoorden",
          edit: 'Bericht bewerken',
          forward: "Doorsturen",
          toForward: "Doorsturen",
          react: "Reageren",
          confirmationModal: {
            title: "Bericht verwijderen?",
            message: "Deze actie kan niet ongedaan worden gemaakt.",
          },
        },
        backendErrors: {
          ERR_NO_OTHER_WHATSAPP: "Er moet ten minste één standaard WhatsApp zijn.",
          ERR_NO_DEF_WAPP_FOUND: "Geen standaard WhatsApp gevonden. Controleer de verbindingenpagina.",
          ERR_WAPP_NOT_INITIALIZED: "Deze WhatsApp-sessie is niet geïnitialiseerd. Controleer de verbindingenpagina.",
          ERR_WAPP_CHECK_CONTACT: "Kon WhatsApp-contact niet verifiëren. Controleer de verbindingenpagina.",
          ERR_WAPP_INVALID_CONTACT: "Dit is geen geldig WhatsApp-nummer.",
          ERR_WAPP_DOWNLOAD_MEDIA: "Kon WhatsApp-media niet downloaden. Controleer de verbindingenpagina.",
          ERR_INVALID_CREDENTIALS: "Authenticatiefout. Probeer het opnieuw.",
          ERR_SENDING_WAPP_MSG: "Fout bij verzenden WhatsApp-bericht. Controleer de verbindingenpagina.",
          ERR_DELETE_WAPP_MSG: "Kon het WhatsApp-bericht niet verwijderen.",
          ERR_OTHER_OPEN_TICKET: "Er is al een open ticket voor dit contact.",
          ERR_SESSION_EXPIRED: "Sessie verlopen. Log opnieuw in.",
          ERR_USER_CREATION_DISABLED: "Gebruiker aanmaken is uitgeschakeld door de beheerder.",
          ERR_NO_PERMISSION: "U heeft geen toegang tot deze functie.",
          ERR_DUPLICATED_CONTACT: "Er bestaat al een contact met dit nummer.",
          ERR_NO_SETTING_FOUND: "Geen instelling gevonden met deze ID.",
          ERR_NO_CONTACT_FOUND: "Geen contact gevonden met deze ID.",
          ERR_NO_TICKET_FOUND: "Geen ticket gevonden met deze ID.",
          ERR_NO_USER_FOUND: "Geen gebruiker gevonden met deze ID.",
          ERR_NO_WAPP_FOUND: "Geen WhatsApp gevonden met deze ID.",
          ERR_CREATING_MESSAGE: "Fout bij het maken van bericht in de database.",
          ERR_CREATING_TICKET: "Fout bij het maken van ticket in de database.",
          ERR_FETCH_WAPP_MSG: "Fout bij ophalen van WhatsApp-bericht, mogelijk is het te oud.",
          ERR_QUEUE_COLOR_ALREADY_EXISTS: "Deze kleur is al in gebruik, kies een andere.",
          ERR_WAPP_GREETING_REQUIRED: "Het begroetingsbericht is verplicht wanneer er meer dan één wachtrij is.",
        },
      }
    }
  }
};

export default messages;


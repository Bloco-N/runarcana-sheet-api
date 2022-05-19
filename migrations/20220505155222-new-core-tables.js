'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Ranges', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('Conjurations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('Durations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('Spells', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      range_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Ranges',
          key: 'id'
        }
      },
      conjuration_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Conjurations',
          key: 'id'
        }
      },
      duration_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Durations',
          key: 'id'
        }
      },
      materials: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('MagicalSources', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('Mysteries', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      source_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'MagicalSources',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('Components', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      symbol: {
        type: Sequelize.CHAR(1),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });


    await queryInterface.createTable('SpellBooks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      char_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Characters',
          key: 'id'
        }
      },
      spell_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Spells',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('SpellOrigins', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      spell_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Spells',
          key: 'id'
        }
      },
      origin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Origins',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('SpellMysteries', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      spell_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Spells',
          key: 'id'
        }
      },
      mystery_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Mysteries',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('SpellComponents', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      spell_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Spells',
          key: 'id'
        }
      },
      component_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Components',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('SpellClasses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      spell_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Spells',
          key: 'id'
        }
      },
      class_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RunarcanaClasses',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('SpellLineages', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      spell_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Spells',
          key: 'id'
        }
      },
      lineage_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Lineages',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('Elements', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      mystery_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Mysteries',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('ElementRecipes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      element_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Elements',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('ElementIngredients', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      recipe_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ElementRecipes',
          key: 'id'
        }
      },
      element_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Elements',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable('CharElements', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      char_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Characters',
          key: 'id'
        }
      },
      element_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Elements',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CharElements');
    await queryInterface.dropTable('ElementIgredients');
    await queryInterface.dropTable('ElementRecipes');
    await queryInterface.dropTable('Elements');
    await queryInterface.dropTable('SpellLineages');
    await queryInterface.dropTable('SpellClasses');
    await queryInterface.dropTable('SpellComponents');
    await queryInterface.dropTable('SpellMysteries');
    await queryInterface.dropTable('SpellOrigins');
    await queryInterface.dropTable('SpellBooks');
    await queryInterface.dropTable('Components');
    await queryInterface.dropTable('Mysteries');
    await queryInterface.dropTable('MagicalSources');
    await queryInterface.dropTable('Spells');
    await queryInterface.dropTable('Durations');
    await queryInterface.dropTable('Conjurations');
    await queryInterface.dropTable('Ranges');
  }
};

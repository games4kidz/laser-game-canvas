var levelsName = [{
    "a": "Einführung",
    "b": "Einfach"
}, {
    "a": "Freundlich",
    "b": "Einfach"
}, {
    "a": "Ecken",
    "b": "Einfach"
}, {
    "a": "Knifflig",
    "b": "Mittel"
}, {
    "a": "Flechten",
    b: "Mittel"
}, {
    "a": "Verrückt",
    "b": "Schwer"
}, {
    "a": "Fäden",
    "b": "Schwer"
}, {
    "a": "Winzig",
    "b": "Einfach - Mittel"
}, {
    "a": "Clou",
    "b": "Einfach - Mittel"
}, {
    "a": "Diagonal",
    "b": "Einfach - Schwer"
}, {
    "a": "Abgezählt",
    "b": "Einfach - Schwer"
}, {
    "a": "Dunkelkammer",
    "b": "Mittel - Schwer"
}, {
    "a": "Gekreuzt",
    "b": "Mittel - Schwer"
}, {
    "a": "Groß",
    "b": "Mittel - Schwer"
}, {
    "a": "Kristall",
    "b": "Einfach"
}, {
    "a": "Prisma",
    "b": "Mittel"
}, {
    "a": "Diamant",
    "b": "Schwer"
}, {
    "a": "Kleiner",
    "b": "Einfach - Mittel"
}, {
    "a": "Glas",
    "b": "Einfach - Schwer"
}, {
    "a": "Elementar",
    "b": "Mittel - Schwer"
}];
var levels = [
    [{
        "l1": 1,
        "l2": 1,
        "rows": 3,
        "columns": 3,
        "none": [1, 2, 3, 4, 6, 7, 8],
        "lasers": [{
            "cell": 1,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 3,
            "side": "n"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [9]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [5]
        }]
    }, {
        "l1": 1,
        "l2": 2,
        "rows": 3,
        "columns": 3,
        "none": [3, 5, 7],
        "lasers": [{
            "cell": 7,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 4,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 9]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 6]
        }]
    }, {
        "l1": 1,
        "l2": 3,
        "rows": 3,
        "columns": 3,
        "none": [3],
        "lasers": [{
            "cell": 3,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 8,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 6]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 9]
        }]
    }, {
        "l1": 1,
        "l2": 4,
        "rows": 3,
        "columns": 3,
        "none": [4, 6],
        "lasers": [{
            "cell": 4,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 5, 9]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 7, 9]
        }]
    }, {
        "l1": 1,
        "l2": 5,
        "rows": 3,
        "columns": 3,
        "none": [5, 7, 9],
        "lasers": [{
            "cell": 7,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 9,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 3, 8]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 4, 6]
        }]
    }, {
        "l1": 1,
        "l2": 6,
        "rows": 6,
        "columns": 4,
        "none": [3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 16, 17, 18, 19, 22, 24],
        "lasers": [{
            "cell": 4,
            "side": "s",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 3,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 9, 15, 21]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9, 13, 20, 23]
        }]
    }, {
        "l1": 1,
        "l2": 7,
        "rows": 5,
        "columns": 3,
        "none": [1, 2, 5, 7, 11, 13, 14],
        "lasers": [{
            "cell": 14,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 2,
            "side": "n"
        }, {
            "cell": 5,
            "side": "n"
        }, {
            "cell": 8,
            "side": "n"
        }, {
            "cell": 11,
            "side": "n"
        }, {
            "cell": 14,
            "side": "n"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4, 6, 8, 10, 12]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 4, 9, 10, 15]
        }]
    }, {
        "l1": 1,
        "l2": 8,
        "rows": 3,
        "columns": 3,
        "none": [1, 2, 6, 9],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 9,
            "side": "s"
        }],
        "cells": [{
            "type": "blackhole",
            "arr": [5, 8]
        }],
        "solution": [{
            "type": "blackhole",
            "arr": [3, 7]
        }]
    }, {
        "l1": 1,
        "l2": 9,
        "rows": 5,
        "columns": 3,
        "none": [1, 2, 3, 5, 9, 10, 13, 14, 15],
        "lasers": [{
            "cell": 15,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 3,
            "side": "e"
        }, {
            "cell": 9,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4]
        }, {
            "type": "glass",
            "arr": [6]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [7]
        }, {
            "type": "glass",
            "arr": [11]
        }]
    }, {
        "l1": 1,
        "l2": 10,
        "rows": 3,
        "columns": 3,
        "none": [3, 8],
        "lasers": [{
            "cell": 8,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 4,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 9]
        }, {
            "type": "mirror_stuck",
            "arr": [7]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 6]
        }, {
            "type": "mirror_stuck",
            "arr": [7]
        }]
    }],
    [{
        "l1": 2,
        "l2": 1,
        "rows": 4,
        "columns": 4,
        "none": [4, 6, 10, 12, 13, 16],
        "lasers": [{
            "cell": 13,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 14,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 5, 15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 8, 9]
        }]
    }, {
        "l1": 2,
        "l2": 2,
        "rows": 3,
        "columns": 3,
        "none": [5],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 1,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 6, 7, 8]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 4, 6, 8]
        }]
    }, {
        "l1": 2,
        "l2": 3,
        "rows": 5,
        "columns": 4,
        "none": [4, 14, 17],
        "lasers": [{
            "cell": 10,
            "side": "s",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [8, 9, 15, 20]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 12, 13, 18]
        }]
    }, {
        "l1": 2,
        "l2": 4,
        "rows": 5,
        "columns": 4,
        "none": [4, 9, 20],
        "lasers": [{
            "cell": 9,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 5,
            "side": "s"
        }, {
            "cell": 6,
            "side": "e"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 13,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [7, 10, 16]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 12, 18]
        }]
    }, {
        "l1": 2,
        "l2": 5,
        "rows": 6,
        "columns": 4,
        "none": [1],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 20,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 10, 12, 22]
        }, {
            "type": "blackhole_stuck",
            "arr": [15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [11, 13, 16, 23]
        }, {
            "type": "blackhole_stuck",
            "arr": [15]
        }]
    }, {
        "l1": 2,
        "l2": 6,
        "rows": 6,
        "columns": 4,
        "none": [7, 9, 11, 24],
        "lasers": [{
            "cell": 11,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 18,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 4, 19, 20]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 5, 12, 17]
        }]
    }, {
        "l1": 2,
        "l2": 7,
        "rows": 5,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 14,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [5, 7, 11, 16, 18]
        }, {
            "type": "mirror_stuck",
            "arr": [10]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 8, 13, 16, 19]
        }, {
            "type": "mirror_stuck",
            "arr": [10]
        }]
    }, {
        "l1": 2,
        "l2": 8,
        "rows": 6,
        "columns": 4,
        "none": [4, 5, 15, 23],
        "lasers": [{
            "cell": 4,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 14,
            "side": "s"
        }, {
            "cell": 18,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [12, 21, 24]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [6, 12, 17]
        }]
    }, {
        "l1": 2,
        "l2": 9,
        "rows": 4,
        "columns": 4,
        "none": [4, 14],
        "lasers": [{
            "cell": 14,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 5,
            "side": "s"
        }, {
            "cell": 7,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 3, 11, 13, 16]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 3, 8, 9, 11]
        }]
    }, {
        "l1": 2,
        "l2": 10,
        "rows": 5,
        "columns": 4,
        "none": [4, 17, 18],
        "lasers": [{
            "cell": 18,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 2,
            "side": "e"
        }, {
            "cell": 11,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 6, 8, 15, 20]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [5, 7, 12, 13, 15]
        }]
    }],
    [{
        "l1": 3,
        "l2": 1,
        "rows": 5,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 9,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 6,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 4, 17, 20]
        }, {
            "type": "blackhole_stuck",
            "arr": [10]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 5, 12, 18]
        }, {
            "type": "blackhole_stuck",
            "arr": [10]
        }]
    }, {
        "l1": 3,
        "l2": 2,
        "rows": 4,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 3,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 6,
            "side": "s"
        }, {
            "cell": 7,
            "side": "s"
        }, {
            "cell": 10,
            "side": "s"
        }, {
            "cell": 11,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 4, 13, 16]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [5, 7, 12, 15]
        }]
    }, {
        "l1": 3,
        "l2": 3,
        "rows": 3,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 2,
            "side": "e"
        }, {
            "cell": 5,
            "side": "e"
        }, {
            "cell": 6,
            "side": "e"
        }, {
            "cell": 7,
            "side": "e"
        }, {
            "cell": 10,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 4, 9, 12]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 5, 8, 10]
        }]
    }, {
        "l1": 3,
        "l2": 4,
        "rows": 3,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 4,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 6,
            "side": "e"
        }, {
            "cell": 7,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 4, 9, 12]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 5, 10, 11]
        }]
    }, {
        "l1": 3,
        "l2": 5,
        "rows": 5,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 2,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 14,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 3, 13, 15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 9, 10, 15]
        }]
    }, {
        "l1": 3,
        "l2": 6,
        "rows": 5,
        "columns": 4,
        "none": [8, 9, 19],
        "lasers": [{
            "cell": 9,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 14,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 4, 17, 20]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 5, 12, 18]
        }]
    }, {
        "l1": 3,
        "l2": 7,
        "rows": 5,
        "columns": 4,
        "none": [5, 9, 12, 19],
        "lasers": [{
            "cell": 9,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 14,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 4, 17, 20]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 8, 13, 18]
        }]
    }, {
        "l1": 3,
        "l2": 8,
        "rows": 5,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "s",
            "dir": "se"
        }],
        "targets": [{
            "cell": 5,
            "side": "w"
        }, {
            "cell": 11,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 4, 17, 20]
        }, {
            "type": "mirror_stuck",
            "arr": [9]
        }, {
            "type": "blackhole_stuck",
            "arr": [12]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 7, 16, 19]
        }, {
            "type": "mirror_stuck",
            "arr": [9]
        }, {
            "type": "blackhole_stuck",
            "arr": [12]
        }]
    }, {
        "l1": 3,
        "l2": 9,
        "rows": 5,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 5,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 11,
            "side": "e"
        }, {
            "cell": 13,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 4, 17, 20]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 9, 12, 18]
        }]
    }, {
        "l1": 3,
        "l2": 10,
        "rows": 4,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 4,
            "side": "s",
            "dir": "sw"
        }, {
            "cell": 5,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 6,
            "side": "s"
        }, {
            "cell": 7,
            "side": "s"
        }, {
            "cell": 9,
            "side": "s"
        }, {
            "cell": 12,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 4, 13, 16]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 6, 11, 14]
        }]
    }],
    [{
        "l1": 4,
        "l2": 1,
        "rows": 6,
        "columns": 4,
        "none": [3, 10, 11, 21],
        "lasers": [{
            "cell": 16,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 1,
            "side": "s"
        }, {
            "cell": 7,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [8, 18]
        }, {
            "type": "glass",
            "arr": [9]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [13, 25]
        }, {
            "type": "glass",
            "arr": [20]
        }]
    }, {
        "l1": 4,
        "l2": 2,
        "rows": 6,
        "columns": 4,
        "none": [1, 4, 7, 11, 14, 21, 24],
        "lasers": [{
            "cell": 24,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [8, 16, 17, 22, 23]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 10, 12, 13, 18]
        }]
    }, {
        "l1": 4,
        "l2": 3,
        "rows": 6,
        "columns": 4,
        "none": [2, 5, 8, 11, 13, 14, 19, 21, 24],
        "lasers": [{
            "cell": 3,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 23,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [6, 7, 9, 10, 12, 15, 16, 17, 18, 22]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 4, 6, 9, 12, 15, 16, 17, 20, 22]
        }]
    }, {
        "l1": 4,
        "l2": 4,
        "rows": 6,
        "columns": 4,
        "none": [1, 2, 4],
        "lasers": [{
            "cell": 1,
            "side": "e",
            "dir": "se"
        }],
        "targets": [{
            "cell": 17,
            "side": "s"
        }, {
            "cell": 18,
            "side": "s"
        }, {
            "cell": 19,
            "side": "s"
        }, {
            "cell": 20,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [22]
        }, {
            "type": "glass",
            "arr": [3, 9, 15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [12]
        }, {
            "type": "glass",
            "arr": [14, 17, 20]
        }]
    }, {
        "l1": 4,
        "l2": 5,
        "rows": 5,
        "columns": 5,
        "none": [3, 23],
        "lasers": [{
            "cell": 11,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }, {
            "cell": 14,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 5, 13, 21, 25]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 9, 15, 19, 22]
        }]
    }, {
        "l1": 4,
        "l2": 6,
        "rows": 6,
        "columns": 4,
        "none": [1, 2, 8, 14, 21],
        "lasers": [{
            "cell": 6,
            "side": "e",
            "dir": "se"
        }],
        "targets": [{
            "cell": 14,
            "side": "e"
        }, {
            "cell": 19,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [5, 22]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [7, 9]
        }]
    }, {
        "l1": 4,
        "l2": 7,
        "rows": 6,
        "columns": 4,
        "none": [4, 11, 13, 24],
        "lasers": [{
            "cell": 1,
            "side": "e",
            "dir": "se"
        }],
        "targets": [{
            "cell": 7,
            "side": "e"
        }, {
            "cell": 18,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [9, 14, 23]
        }, {
            "type": "glass",
            "arr": [3]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [10, 12, 17]
        }, {
            "type": "glass",
            "arr": [15]
        }]
    }, {
        "l1": 4,
        "l2": 8,
        "rows": 5,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 8,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 1,
            "side": "w"
        }, {
            "cell": 13,
            "side": "s"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "glass",
            "arr": [3, 10, 14]
        }],
        "solution": [{
            "type": "glass",
            "arr": [8, 9, 12]
        }]
    }, {
        "l1": 4,
        "l2": 9,
        "rows": 5,
        "columns": 5,
        "none": [1, 5, 14, 21, 25],
        "lasers": [{
            "cell": 9,
            "side": "s",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 7,
            "side": "e"
        }, {
            "cell": 7,
            "side": "s"
        }, {
            "cell": 8,
            "side": "e"
        }, {
            "cell": 12,
            "side": "s"
        }, {
            "cell": 14,
            "side": "s"
        }, {
            "cell": 17,
            "side": "e"
        }, {
            "cell": 18,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [13, 16, 20, 22, 24]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 11, 15, 17, 23]
        }]
    }, {
        "l1": 4,
        "l2": 10,
        "rows": 5,
        "columns": 4,
        "none": [4, 7],
        "lasers": [{
            "cell": 11,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 7,
            "side": "s"
        }, {
            "cell": 10,
            "side": "s"
        }, {
            "cell": 14,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 5, 14, 17]
        }, {
            "type": "blackhole_stuck",
            "arr": [16, 20]
        }, {
            "type": "glass_stuck",
            "arr": [8]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 6, 13, 18]
        }, {
            "type": "blackhole_stuck",
            "arr": [16, 20]
        }, {
            "type": "glass_stuck",
            "arr": [8]
        }]
    }],
    [{
        "l1": 5,
        "l2": 1,
        "rows": 4,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 4,
            "side": "s",
            "dir": "se"
        }, {
            "cell": 7,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 7,
            "side": "w"
        }, {
            "cell": 9,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 5, 11]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 6, 11]
        }]
    }, {
        "l1": 5,
        "l2": 2,
        "rows": 5,
        "columns": 4,
        "none": [8, 17],
        "lasers": [{
            "cell": 6,
            "side": "s",
            "dir": "se"
        }, {
            "cell": 10,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }, {
            "cell": 14,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [7, 15, 18]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9, 16, 19]
        }]
    }, {
        "l1": 5,
        "l2": 3,
        "rows": 4,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "e",
            "dir": "se"
        }, {
            "cell": 2,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 10,
            "side": "e"
        }, {
            "cell": 11,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 4, 9, 11]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 6, 7, 9]
        }]
    }, {
        "l1": 5,
        "l2": 4,
        "rows": 5,
        "columns": 4,
        "none": [3, 19],
        "lasers": [{
            "cell": 5,
            "side": "s",
            "dir": "se"
        }, {
            "cell": 9,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 2,
            "side": "n"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 18,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [5, 6, 12, 17]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [6, 8, 14, 16]
        }]
    }, {
        "l1": 5,
        "l2": 5,
        "rows": 5,
        "columns": 4,
        "none": [10, 11, 17, 18],
        "lasers": [{
            "cell": 6,
            "side": "s",
            "dir": "se"
        }, {
            "cell": 10,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 3,
            "side": "n"
        }, {
            "cell": 19,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 4, 5, 9, 16]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [5, 7, 12, 13, 15]
        }]
    }, {
        "l1": 5,
        "l2": 6,
        "rows": 5,
        "columns": 4,
        "none": [6, 9, 17],
        "lasers": [{
            "cell": 5,
            "side": "s",
            "dir": "se"
        }, {
            "cell": 9,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 2,
            "side": "n"
        }, {
            "cell": 18,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 4, 7, 12, 14, 20]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 5, 8, 13, 16, 19]
        }]
    }, {
        "l1": 5,
        "l2": 7,
        "rows": 5,
        "columns": 4,
        "none": [4, 10, 17, 20],
        "lasers": [{
            "cell": 5,
            "side": "s",
            "dir": "se"
        }, {
            "cell": 9,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 5,
            "side": "w"
        }, {
            "cell": 11,
            "side": "e"
        }, {
            "cell": 13,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [6, 7, 14, 15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 9, 12, 18]
        }]
    }, {
        "l1": 5,
        "l2": 8,
        "rows": 6,
        "columns": 4,
        "none": [2],
        "lasers": [{
            "cell": 1,
            "side": "e",
            "dir": "se"
        }, {
            "cell": 2,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 3,
            "side": "s"
        }, {
            "cell": 7,
            "side": "s"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 15,
            "side": "s"
        }, {
            "cell": 19,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 8, 10, 16, 18]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [5, 10, 12, 14, 20]
        }]
    }, {
        "l1": 5,
        "l2": 9,
        "rows": 3,
        "columns": 4,
        "none": [7],
        "lasers": [{
            "cell": 1,
            "side": "s",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 3,
            "side": "n"
        }, {
            "cell": 10,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 9, 12]
        }, {
            "type": "blackhole",
            "arr": [2, 4, 8, 11]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 8, 11]
        }, {
            "type": "blackhole",
            "arr": [1, 4, 9, 12]
        }]
    }, {
        "l1": 5,
        "l2": 10,
        "rows": 5,
        "columns": 4,
        "none": [1, 10, 12, 20],
        "lasers": [{
            "cell": 1,
            "side": "s",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 7,
            "side": "e"
        }, {
            "cell": 9,
            "side": "s"
        }, {
            "cell": 16,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 4, 14, 15, 17, 19]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 3, 8, 11, 13, 18]
        }]
    }],
    [{
        "l1": 6,
        "l2": 1,
        "rows": 4,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 13,
            "side": "e",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 2,
            "side": "n"
        }, {
            "cell": 6,
            "side": "e"
        }, {
            "cell": 9,
            "side": "e"
        }, {
            "cell": 14,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4, 15]
        }, {
            "type": "glass",
            "arr": [12]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [8, 9]
        }, {
            "type": "glass",
            "arr": [3]
        }]
    }, {
        "l1": 6,
        "l2": 2,
        "rows": 4,
        "columns": 4,
        "none": [9, 12],
        "lasers": [{
            "cell": 13,
            "side": "e",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 2,
            "side": "n"
        }, {
            "cell": 6,
            "side": "e"
        }, {
            "cell": 9,
            "side": "e"
        }, {
            "cell": 14,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 4, 15]
        }, {
            "type": "glass",
            "arr": [11]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 5, 8]
        }, {
            "type": "glass",
            "arr": [10]
        }]
    }, {
        "l1": 6,
        "l2": 3,
        "rows": 6,
        "columns": 4,
        "none": [4, 16, 21],
        "lasers": [{
            "cell": 9,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 7,
            "side": "s"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 11,
            "side": "e"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 19,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [7, 10, 11, 12, 15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [6, 7, 12, 13, 15]
        }]
    }, {
        "l1": 6,
        "l2": 4,
        "rows": 5,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 4,
            "side": "s",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 6,
            "side": "s"
        }, {
            "cell": 8,
            "side": "s"
        }, {
            "cell": 15,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 3, 5, 18, 20]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [6, 9, 14, 16, 19]
        }]
    }, {
        "l1": 6,
        "l2": 5,
        "rows": 6,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 12,
            "side": "s",
            "dir": "nw"
        }, {
            "cell": 24,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 3,
            "side": "e"
        }, {
            "cell": 6,
            "side": "s"
        }, {
            "cell": 8,
            "side": "e"
        }, {
            "cell": 13,
            "side": "s"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 18]
        }, {
            "type": "glass",
            "arr": [23]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [6, 9]
        }, {
            "type": "glass",
            "arr": [11]
        }]
    }, {
        "l1": 6,
        "l2": 6,
        "rows": 5,
        "columns": 5,
        "none": [1, 5, 13, 21, 25],
        "lasers": [{
            "cell": 1,
            "side": "e",
            "dir": "se"
        }, {
            "cell": 10,
            "side": "s",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 8,
            "side": "e"
        }, {
            "cell": 13,
            "side": "e"
        }, {
            "cell": 15,
            "side": "s"
        }, {
            "cell": 18,
            "side": "e"
        }, {
            "cell": 21,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 6, 12, 16, 24]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 12, 14, 15, 24]
        }]
    }, {
        "l1": 6,
        "l2": 7,
        "rows": 5,
        "columns": 5,
        "none": [15],
        "lasers": [{
            "cell": 1,
            "side": "e",
            "dir": "se"
        }, {
            "cell": 10,
            "side": "s",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 8,
            "side": "e"
        }, {
            "cell": 13,
            "side": "e"
        }, {
            "cell": 15,
            "side": "s"
        }, {
            "cell": 18,
            "side": "e"
        }, {
            "cell": 21,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 5, 6, 12, 16, 24]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 9, 11, 13, 19, 23]
        }]
    }, {
        "l1": 6,
        "l2": 8,
        "rows": 5,
        "columns": 5,
        "none": [1, 5, 21, 25],
        "lasers": [{
            "cell": 5,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 7,
            "side": "e"
        }, {
            "cell": 7,
            "side": "s"
        }, {
            "cell": 8,
            "side": "e"
        }, {
            "cell": 12,
            "side": "s"
        }, {
            "cell": 14,
            "side": "s"
        }, {
            "cell": 17,
            "side": "e"
        }, {
            "cell": 18,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [16, 20, 22, 24]
        }, {
            "type": "glass_stuck",
            "arr": [13]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 11, 14, 23]
        }, {
            "type": "glass_stuck",
            "arr": [13]
        }]
    }, {
        "l1": 6,
        "l2": 9,
        "rows": 6,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 4,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 1,
            "side": "s"
        }, {
            "cell": 9,
            "side": "e"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 18,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 6, 8, 13, 19, 21, 24]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9, 11, 13, 16, 17, 19, 22]
        }]
    }, {
        "l1": 6,
        "l2": 10,
        "rows": 6,
        "columns": 6,
        "none": [3, 6, 11, 13, 15, 23, 27, 28],
        "lasers": [{
            "cell": 7,
            "side": "e",
            "dir": "se"
        }],
        "targets": [{
            "cell": 8,
            "side": "e"
        }, {
            "cell": 9,
            "side": "e"
        }, {
            "cell": 10,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 5, 12, 19, 22, 30, 32, 35]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 16, 18, 19, 26, 30, 33, 35]
        }]
    }],
    [{
        "l1": 7,
        "l2": 1,
        "rows": 6,
        "columns": 4,
        "none": [1, 6, 7, 11, 13, 16, 19, 23],
        "lasers": [{
            "cell": 10,
            "side": "e",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 11,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 9, 18, 20, 21]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 3, 5, 8, 10]
        }]
    }, {
        "l1": 7,
        "l2": 2,
        "rows": 5,
        "columns": 5,
        "none": [1, 5, 7, 9, 17],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 3,
            "side": "s"
        }, {
            "cell": 16,
            "side": "e"
        }, {
            "cell": 24,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 4, 6, 10, 13, 20]
        }, {
            "type": "mirror_stuck",
            "arr": [11]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 13, 15, 16, 18, 22]
        }, {
            "type": "mirror_stuck",
            "arr": [11]
        }]
    }, {
        "l1": 7,
        "l2": 3,
        "rows": 5,
        "columns": 5,
        "none": [2, 12, 16, 19, 20, 22, 23, 24],
        "lasers": [{
            "cell": 13,
            "side": "s",
            "dir": "se"
        }, {
            "cell": 24,
            "side": "e",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 5,
            "side": "s"
        }, {
            "cell": 8,
            "side": "e"
        }, {
            "cell": 12,
            "side": "e"
        }, {
            "cell": 12,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4, 7, 11, 14, 21]
        }, {
            "type": "mirror_stuck",
            "arr": [15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 11, 17, 18, 25]
        }, {
            "type": "mirror_stuck",
            "arr": [15]
        }]
    }, {
        "l1": 7,
        "l2": 4,
        "rows": 6,
        "columns": 5,
        "none": [1, 11, 12, 24, 27],
        "lasers": [{
            "cell": 9,
            "side": "e",
            "dir": "se"
        }],
        "targets": [{
            "cell": 4,
            "side": "n"
        }, {
            "cell": 4,
            "side": "s"
        }, {
            "cell": 18,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 7, 15, 16, 19, 29]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [5, 8, 10, 15, 17, 23]
        }]
    }, {
        "l1": 7,
        "l2": 5,
        "rows": 6,
        "columns": 5,
        "none": [3, 12, 17, 20, 23, 24, 28],
        "lasers": [{
            "cell": 2,
            "side": "e",
            "dir": "se"
        }],
        "targets": [{
            "cell": 5,
            "side": "s"
        }, {
            "cell": 23,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 10, 11, 13, 19, 22, 25, 29]
        }, {
            "type": "blackhole_stuck",
            "arr": [2, 26]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [7, 11, 15, 18, 21, 25, 27, 29]
        }, {
            "type": "blackhole_stuck",
            "arr": [2, 26]
        }]
    }, {
        "l1": 7,
        "l2": 6,
        "rows": 5,
        "columns": 4,
        "none": [4, 5, 7, 10, 11, 17, 18, 20],
        "lasers": [{
            "cell": 9,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 9,
            "side": "w"
        }, {
            "cell": 10,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 12, 14]
        }, {
            "type": "glass",
            "arr": [15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 12, 15]
        }, {
            "type": "glass",
            "arr": [6]
        }]
    }, {
        "l1": 7,
        "l2": 7,
        "rows": 5,
        "columns": 4,
        "none": [9, 12, 20],
        "lasers": [{
            "cell": 12,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 14,
            "side": "e",
            "dir": "se"
        }],
        "targets": [{
            "cell": 1,
            "side": "s"
        }, {
            "cell": 6,
            "side": "e"
        }, {
            "cell": 7,
            "side": "e"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 4, 5, 11, 17]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 8, 10, 16, 19]
        }]
    }, {
        "l1": 7,
        "l2": 8,
        "rows": 6,
        "columns": 5,
        "none": [18, 25],
        "lasers": [{
            "cell": 18,
            "side": "s",
            "dir": "se"
        }],
        "targets": [{
            "cell": 9,
            "side": "s"
        }, {
            "cell": 12,
            "side": "s"
        }, {
            "cell": 21,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 5, 8, 16, 20, 27]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 10, 16, 24, 26, 28]
        }]
    }, {
        "l1": 7,
        "l2": 9,
        "rows": 7,
        "columns": 5,
        "none": [6, 12, 13, 16, 23, 30],
        "lasers": [{
            "cell": 6,
            "side": "e",
            "dir": "se"
        }],
        "targets": [{
            "cell": 5,
            "side": "s"
        }, {
            "cell": 7,
            "side": "s"
        }, {
            "cell": 14,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 4, 17, 26, 28, 34]
        }, {
            "type": "mirror_stuck",
            "arr": [15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 11, 21, 25, 27, 29]
        }, {
            "type": "mirror_stuck",
            "arr": [15]
        }]
    }, {
        "l1": 7,
        "l2": 10,
        "rows": 6,
        "columns": 4,
        "none": [10, 15, 20, 21, 23],
        "lasers": [{
            "cell": 8,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 8,
            "side": "e"
        }, {
            "cell": 11,
            "side": "e"
        }, {
            "cell": 14,
            "side": "e"
        }, {
            "cell": 15,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [5, 6, 11, 14, 16, 17, 19, 22]
        }, {
            "type": "mirror_stuck",
            "arr": [2]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 4, 6, 9, 12, 14, 16, 19]
        }, {
            "type": "mirror_stuck",
            "arr": [2]
        }]
    }],
    [{
        "l1": 8,
        "l2": 1,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 6,
            "side": "s",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 3, 5]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 5, 9]
        }]
    }, {
        "l1": 8,
        "l2": 2,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 6,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 8,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 2,
            "side": "n"
        }, {
            "cell": 4,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 7]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 9]
        }]
    }, {
        "l1": 8,
        "l2": 3,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 4,
            "side": "e",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 7,
            "side": "e"
        }, {
            "cell": 9,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4]
        }, {
            "type": "glass",
            "arr": [3]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2]
        }, {
            "type": "glass",
            "arr": [6]
        }]
    }, {
        "l1": 8,
        "l2": 4,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 7,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 8,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 2,
            "side": "e"
        }, {
            "cell": 7,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 4, 5, 7]
        }, {
            "type": "blackhole_stuck",
            "arr": [9]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 3, 4, 6]
        }, {
            "type": "blackhole_stuck",
            "arr": [9]
        }]
    }, {
        "l1": 8,
        "l2": 5,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 8,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 1,
            "side": "s"
        }, {
            "cell": 6,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 5, 9]
        }, {
            "type": "glass",
            "arr": [4]
        }, {
            "type": "blackhole_stuck",
            "arr": [2]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 3, 7]
        }, {
            "type": "glass",
            "arr": [8]
        }, {
            "type": "blackhole_stuck",
            "arr": [2]
        }]
    }, {
        "l1": 8,
        "l2": 6,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 6,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 1,
            "side": "w"
        }, {
            "cell": 2,
            "side": "s"
        }, {
            "cell": 4,
            "side": "e"
        }],
        "cells": [{
            "type": "glass",
            "arr": [3, 5, 7]
        }, {
            "type": "blackhole_stuck",
            "arr": [8]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 4, 9]
        }, {
            "type": "glass",
            "arr": [8]
        }, {
            "type": "blackhole_stuck",
            "arr": [8]
        }]
    }, {
        "l1": 8,
        "l2": 7,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 3,
            "side": "s",
            "dir": "sw"
        }, {
            "cell": 6,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 1,
            "side": "n"
        }, {
            "cell": 2,
            "side": "n"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 7, 9]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 4, 8]
        }]
    }, {
        "l1": 8,
        "l2": 8,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 6,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 9,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 4,
            "side": "w"
        }, {
            "cell": 4,
            "side": "e"
        }, {
            "cell": 5,
            "side": "e"
        }, {
            "cell": 7,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 7]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 3]
        }]
    }, {
        "l1": 8,
        "l2": 9,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 3,
            "side": "n",
            "dir": "sw"
        }, {
            "cell": 9,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 2,
            "side": "e"
        }, {
            "cell": 4,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [5, 8, 9]
        }, {
            "type": "blackhole_stuck",
            "arr": [7]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 2, 6]
        }, {
            "type": "blackhole_stuck",
            "arr": [7]
        }]
    }, {
        "l1": 8,
        "l2": 10,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 4,
            "side": "w",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 3, 4, 5, 6, 7]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 2, 3, 7, 8, 9]
        }]
    }],
    [{
        "l1": 9,
        "l2": 1,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 3,
            "side": "n"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4]
        }, {
            "type": "blackhole",
            "arr": [2, 5, 6]
        }, {
            "type": "blackhole_stuck",
            "arr": [7, 9]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [5]
        }, {
            "type": "blackhole",
            "arr": [4, 6]
        }, {
            "type": "blackhole_stuck",
            "arr": [7, 9]
        }]
    }, {
        "l1": 9,
        "l2": 2,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 7,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 4,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4, 6]
        }, {
            "type": "blackhole",
            "arr": [1, 8, 9]
        }, {
            "type": "blackhole_stuck",
            "arr": [3]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 6]
        }, {
            "type": "blackhole",
            "arr": [1, 4, 9]
        }, {
            "type": "blackhole_stuck",
            "arr": [3]
        }]
    }, {
        "l1": 9,
        "l2": 3,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 9,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 4,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 8]
        }, {
            "type": "blackhole",
            "arr": [1, 6, 7]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 7]
        }, {
            "type": "blackhole",
            "arr": [1, 3, 8]
        }]
    }, {
        "l1": 9,
        "l2": 4,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 8,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 4,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 5, 9]
        }, {
            "type": "blackhole",
            "arr": [2, 6, 7]
        }, {
            "type": "blackhole_stuck",
            "arr": [1]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 6, 7]
        }, {
            "type": "blackhole",
            "arr": [3, 4, 9]
        }, {
            "type": "blackhole_stuck",
            "arr": [1]
        }]
    }, {
        "l1": 9,
        "l2": 5,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 1,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4, 6, 7, 9]
        }, {
            "type": "blackhole",
            "arr": [1, 3, 8]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 4, 6, 8]
        }, {
            "type": "blackhole",
            "arr": [1, 7, 9]
        }]
    }, {
        "l1": 9,
        "l2": 6,
        "rows": 4,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 12,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 4, 5, 8]
        }, {
            "type": "blackhole",
            "arr": [3, 6, 9, 11, 14]
        }, {
            "type": "blackhole_stuck",
            "arr": [7, 13]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 5, 8, 15]
        }, {
            "type": "blackhole",
            "arr": [1, 4, 9, 14, 16]
        }, {
            "type": "blackhole_stuck",
            "arr": [7, 13]
        }]
    }, {
        "l1": 9,
        "l2": 7,
        "rows": 6,
        "columns": 4,
        "none": [1, 24],
        "lasers": [{
            "cell": 20,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [9, 21]
        }, {
            "type": "blackhole",
            "arr": [3, 4, 5, 7, 10, 11, 12, 15, 16, 17, 18, 22]
        }, {
            "type": "blackhole_stuck",
            "arr": [8, 13, 23]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [12, 14]
        }, {
            "type": "blackhole",
            "arr": [2, 3, 4, 5, 6, 9, 10, 16, 17, 18, 21, 22]
        }, {
            "type": "blackhole_stuck",
            "arr": [8, 13, 23]
        }]
    }, {
        "l1": 9,
        "l2": 8,
        "rows": 5,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 7,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 11,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [5, 10, 12, 13]
        }, {
            "type": "blackhole",
            "arr": [1, 4, 6, 9, 14, 16, 18, 20]
        }, {
            "type": "blackhole_stuck",
            "arr": [2, 11, 17]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 9, 16, 19]
        }, {
            "type": "blackhole",
            "arr": [1, 4, 5, 8, 12, 13, 18, 20]
        }, {
            "type": "blackhole_stuck",
            "arr": [2, 11, 17]
        }]
    }, {
        "l1": 9,
        "l2": 9,
        "rows": 5,
        "columns": 5,
        "none": [],
        "lasers": [{
            "cell": 11,
            "side": "e",
            "dir": "se"
        }],
        "targets": [{
            "cell": 7,
            "side": "s"
        }, {
            "cell": 9,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [16, 20, 24]
        }, {
            "type": "blackhole",
            "arr": [2, 4, 8, 10, 11, 14, 15, 18, 22, 23]
        }, {
            "type": "blackhole_stuck",
            "arr": [1, 5, 21, 25]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 15, 23]
        }, {
            "type": "blackhole",
            "arr": [2, 4, 6, 10, 11, 13, 16, 20, 22, 24]
        }, {
            "type": "blackhole_stuck",
            "arr": [1, 5, 21, 25]
        }]
    }, {
        "l1": 9,
        "l2": 10,
        "rows": 5,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 3,
            "side": "e"
        }, {
            "cell": 10,
            "side": "s"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 6, 8, 9, 11, 14]
        }, {
            "type": "blackhole",
            "arr": [2, 5, 16, 17, 19]
        }, {
            "type": "blackhole_stuck",
            "arr": [12]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9, 11, 13, 16, 18, 19]
        }, {
            "type": "blackhole",
            "arr": [2, 4, 8, 17, 20]
        }, {
            "type": "blackhole_stuck",
            "arr": [12]
        }]
    }],
    [{
        "l1": 10,
        "l2": 1,
        "rows": 4,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 16,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 6,
            "side": "s"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 12]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 5]
        }]
    }, {
        "l1": 10,
        "l2": 2,
        "rows": 4,
        "columns": 4,
        "none": [1, 3, 4, 8, 13],
        "lasers": [{
            "cell": 16,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 6,
            "side": "s"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [9, 10, 12, 14, 15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 5, 7, 9, 14]
        }]
    }, {
        "l1": 10,
        "l2": 3,
        "rows": 4,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 16,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 6,
            "side": "s"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 8]
        }, {
            "type": "glass",
            "arr": [4]
        }, {
            "type": "blackhole_stuck",
            "arr": [15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 5]
        }, {
            "type": "glass",
            "arr": [12]
        }, {
            "type": "blackhole_stuck",
            "arr": [15]
        }]
    }, {
        "l1": 10,
        "l2": 4,
        "rows": 5,
        "columns": 4,
        "none": [1, 5, 20],
        "lasers": [{
            "cell": 16,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 6,
            "side": "s"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 4, 7, 8, 17, 19]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 7, 9, 12, 14, 19]
        }]
    }, {
        "l1": 10,
        "l2": 5,
        "rows": 5,
        "columns": 4,
        "none": [7, 17],
        "lasers": [{
            "cell": 16,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 6,
            "side": "s"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 3, 4, 8, 11, 13, 14, 20]
        }, {
            "type": "blackhole_stuck",
            "arr": [5]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 3, 8, 9, 12, 13, 18, 19]
        }, {
            "type": "blackhole_stuck",
            "arr": [5]
        }]
    }, {
        "l1": 10,
        "l2": 6,
        "rows": 4,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 16,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 6,
            "side": "s"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 4, 8, 9]
        }, {
            "type": "glass",
            "arr": [13]
        }, {
            "type": "mirror_stuck",
            "arr": [10]
        }, {
            "type": "blackhole_stuck",
            "arr": [15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 3, 5, 8]
        }, {
            "type": "glass",
            "arr": [12]
        }, {
            "type": "mirror_stuck",
            "arr": [10]
        }, {
            "type": "blackhole_stuck",
            "arr": [15]
        }]
    }, {
        "l1": 10,
        "l2": 7,
        "rows": 5,
        "columns": 4,
        "none": [1, 5, 6, 20],
        "lasers": [{
            "cell": 16,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 6,
            "side": "s"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 4, 17, 19]
        }, {
            "type": "glass",
            "arr": [8]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 7, 9, 14]
        }, {
            "type": "glass",
            "arr": [10]
        }]
    }, {
        "l1": 10,
        "l2": 8,
        "rows": 5,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 16,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 6,
            "side": "s"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 8, 14, 17]
        }, {
            "type": "glass",
            "arr": [7, 20]
        }, {
            "type": "blackhole_stuck",
            "arr": [5, 15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 7, 9, 14]
        }, {
            "type": "glass",
            "arr": [6, 12]
        }, {
            "type": "blackhole_stuck",
            "arr": [5, 15]
        }]
    }, {
        "l1": 10,
        "l2": 9,
        "rows": 6,
        "columns": 6,
        "none": [7, 8, 22, 28, 32],
        "lasers": [{
            "cell": 28,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 13,
            "side": "e"
        }, {
            "cell": 14,
            "side": "s"
        }, {
            "cell": 20,
            "side": "e"
        }, {
            "cell": 21,
            "side": "s"
        }, {
            "cell": 27,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 10, 12, 19, 33, 35]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 13, 15, 20, 24, 34]
        }]
    }, {
        "l1": 10,
        "l2": 10,
        "rows": 7,
        "columns": 7,
        "none": [2, 9, 11, 13, 14, 16, 17, 18, 24, 26, 28, 31, 33, 36, 37, 40, 41, 42, 46, 48],
        "lasers": [{
            "cell": 40,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 23,
            "side": "e"
        }, {
            "cell": 24,
            "side": "s"
        }, {
            "cell": 31,
            "side": "e"
        }, {
            "cell": 32,
            "side": "s"
        }, {
            "cell": 39,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [7, 12, 19, 21, 25, 35, 38, 44, 49]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 5, 15, 21, 29, 32, 35, 45, 47]
        }]
    }],
    [{
        "l1": 11,
        "l2": 1,
        "rows": 5,
        "columns": 3,
        "none": [1, 3, 6, 7, 9, 10, 12],
        "lasers": [{
            "cell": 10,
            "side": "w",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 9,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [14]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [5]
        }]
    }, {
        "l1": 11,
        "l2": 2,
        "rows": 5,
        "columns": 3,
        "none": [4, 5, 11, 12],
        "lasers": [{
            "cell": 13,
            "side": "w",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 4,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [7, 15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 9]
        }]
    }, {
        "l1": 11,
        "l2": 3,
        "rows": 5,
        "columns": 3,
        "none": [4, 5, 10, 11],
        "lasers": [{
            "cell": 10,
            "side": "w",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 8,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 9, 15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [7, 12, 14]
        }]
    }, {
        "l1": 11,
        "l2": 4,
        "rows": 5,
        "columns": 3,
        "none": [2, 5, 10, 11, 13, 14],
        "lasers": [{
            "cell": 3,
            "side": "s",
            "dir": "nw"
        }, {
            "cell": 4,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 2,
            "side": "n"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [8, 9, 12, 15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 3, 7, 9]
        }]
    }, {
        "l1": 11,
        "l2": 5,
        "rows": 5,
        "columns": 3,
        "none": [5, 6, 10, 11],
        "lasers": [{
            "cell": 9,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 10,
            "side": "w",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 5,
            "side": "s"
        }, {
            "cell": 6,
            "side": "e"
        }, {
            "cell": 8,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 8, 12, 15]
        }, {
            "type": "mirror_stuck",
            "arr": [4]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 7, 12, 14]
        }, {
            "type": "mirror_stuck",
            "arr": [4]
        }]
    }, {
        "l1": 11,
        "l2": 6,
        "rows": 5,
        "columns": 3,
        "none": [5, 6, 11],
        "lasers": [{
            "cell": 14,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 15,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 3,
            "side": "n"
        }, {
            "cell": 7,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 2, 7]
        }, {
            "type": "blackhole",
            "arr": [9, 10, 12]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 9, 10]
        }, {
            "type": "blackhole",
            "arr": [1, 7, 13]
        }]
    }, {
        "l1": 11,
        "l2": 7,
        "rows": 5,
        "columns": 3,
        "none": [4, 5, 7, 10, 11, 13, 14],
        "lasers": [{
            "cell": 1,
            "side": "s",
            "dir": "ne"
        }, {
            "cell": 2,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 8,
            "side": "e",
            "dir": "ne"
        }, {
            "cell": 12,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 14,
            "side": "e",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }, {
            "cell": 7,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 3, 9, 12]
        }, {
            "type": "blackhole",
            "arr": [1, 8, 15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 3, 8, 15]
        }, {
            "type": "blackhole",
            "arr": [2, 9, 12]
        }]
    }, {
        "l1": 11,
        "l2": 8,
        "rows": 5,
        "columns": 3,
        "none": [5, 11],
        "lasers": [{
            "cell": 5,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 4,
            "side": "e"
        }, {
            "cell": 7,
            "side": "e"
        }, {
            "cell": 14,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 2, 3, 9, 10, 13, 15]
        }, {
            "type": "glass",
            "arr": [7]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 4, 6, 9, 10, 12, 15]
        }, {
            "type": "glass",
            "arr": [14]
        }]
    }, {
        "l1": 11,
        "l2": 9,
        "rows": 5,
        "columns": 3,
        "none": [5, 10, 11],
        "lasers": [{
            "cell": 3,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 9,
            "side": "e"
        }, {
            "cell": 12,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [7, 8, 13, 14, 15]
        }, {
            "type": "blackhole",
            "arr": [2, 3, 4]
        }, {
            "type": "glass",
            "arr": [1]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 3, 4, 7, 15]
        }, {
            "type": "blackhole",
            "arr": [1, 13, 14]
        }, {
            "type": "glass",
            "arr": [8]
        }]
    }, {
        "l1": 11,
        "l2": 10,
        "rows": 5,
        "columns": 6,
        "none": [1, 3, 9, 11, 13, 15, 17, 19, 21, 23],
        "lasers": [{
            "cell": 26,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 8,
            "side": "s"
        }, {
            "cell": 17,
            "side": "s"
        }, {
            "cell": 25,
            "side": "s"
        }, {
            "cell": 30,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [5, 7, 10, 18, 20, 29]
        }, {
            "type": "glass",
            "arr": [2]
        }, {
            "type": "blackhole_stuck",
            "arr": [4, 24, 28]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 5, 7, 12, 18, 22]
        }, {
            "type": "glass",
            "arr": [10]
        }, {
            "type": "blackhole_stuck",
            "arr": [4, 24, 28]
        }]
    }],
    [{
        "l1": 12,
        "l2": 1,
        "rows": 3,
        "columns": 3,
        "none": [1, 9],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "sw"
        }, {
            "cell": 5,
            "side": "e",
            "dir": "ne"
        }, {
            "cell": 7,
            "side": "s",
            "dir": "ne"
        }, {
            "cell": 8,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 3,
            "side": "e"
        }, {
            "cell": 4,
            "side": "w"
        }],
        "cells": [{
            "type": "blackhole",
            "arr": [4, 5, 6]
        }],
        "solution": [{
            "type": "blackhole",
            "arr": [5, 7, 8]
        }]
    }, {
        "l1": 12,
        "l2": 2,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 2,
            "side": "s",
            "dir": "se"
        }, {
            "cell": 7,
            "side": "e",
            "dir": "ne"
        }, {
            "cell": 8,
            "side": "e",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 3,
            "side": "s"
        }, {
            "cell": 4,
            "side": "e"
        }, {
            "cell": 6,
            "side": "s"
        }],
        "cells": [{
            "type": "blackhole",
            "arr": [1, 5, 8, 9]
        }],
        "solution": [{
            "type": "blackhole",
            "arr": [2, 3, 7, 9]
        }]
    }, {
        "l1": 12,
        "l2": 3,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 3,
            "side": "n",
            "dir": "sw"
        }, {
            "cell": 4,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 6,
            "side": "s",
            "dir": "sw"
        }, {
            "cell": 9,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 2,
            "side": "e"
        }, {
            "cell": 4,
            "side": "e"
        }, {
            "cell": 7,
            "side": "w"
        }, {
            "cell": 8,
            "side": "s"
        }],
        "cells": [{
            "type": "blackhole",
            "arr": [3, 4, 9]
        }],
        "solution": [{
            "type": "blackhole",
            "arr": [1, 6, 9]
        }]
    }, {
        "l1": 12,
        "l2": 4,
        "rows": 4,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "s",
            "dir": "ne"
        }, {
            "cell": 7,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 7,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 9,
            "side": "s",
            "dir": "sw"
        }, {
            "cell": 9,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 10,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 2,
            "side": "s"
        }, {
            "cell": 3,
            "side": "s"
        }, {
            "cell": 4,
            "side": "w"
        }, {
            "cell": 8,
            "side": "s"
        }, {
            "cell": 11,
            "side": "s"
        }],
        "cells": [{
            "type": "blackhole",
            "arr": [2, 6, 7, 10, 12]
        }],
        "solution": [{
            "type": "blackhole",
            "arr": [1, 2, 3, 8, 12]
        }]
    }, {
        "l1": 12,
        "l2": 5,
        "rows": 6,
        "columns": 2,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 2,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 3,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 4,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 5,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 6,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 7,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 8,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 9,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 10,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 11,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 12,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 1,
            "side": "e"
        }, {
            "cell": 3,
            "side": "e"
        }, {
            "cell": 5,
            "side": "e"
        }, {
            "cell": 7,
            "side": "e"
        }, {
            "cell": 9,
            "side": "e"
        }, {
            "cell": 11,
            "side": "e"
        }],
        "cells": [{
            "type": "blackhole",
            "arr": [1, 4, 5, 8, 9, 12]
        }],
        "solution": [{
            "type": "blackhole",
            "arr": [2, 4, 6, 8, 9, 11]
        }]
    }, {
        "l1": 12,
        "l2": 6,
        "rows": 3,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 4,
            "side": "n",
            "dir": "sw"
        }, {
            "cell": 5,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 10,
            "side": "s",
            "dir": "ne"
        }, {
            "cell": 11,
            "side": "s",
            "dir": "nw"
        }, {
            "cell": 12,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 1,
            "side": "e"
        }, {
            "cell": 3,
            "side": "s"
        }, {
            "cell": 6,
            "side": "s"
        }, {
            "cell": 7,
            "side": "s"
        }],
        "cells": [{
            "type": "blackhole",
            "arr": [4, 5, 9, 10, 11, 12]
        }],
        "solution": [{
            "type": "blackhole",
            "arr": [2, 6, 7, 8, 9, 12]
        }]
    }, {
        "l1": 12,
        "l2": 7,
        "rows": 5,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "n",
            "dir": "se"
        }, {
            "cell": 4,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 9,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 10,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 12,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 13,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 13,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 1,
            "side": "s"
        }, {
            "cell": 5,
            "side": "e"
        }, {
            "cell": 7,
            "side": "e"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 11,
            "side": "e"
        }],
        "cells": [{
            "type": "blackhole",
            "arr": [2, 3, 4, 9, 10, 12, 13]
        }],
        "solution": [{
            "type": "blackhole",
            "arr": [1, 2, 3, 6, 11, 14, 15]
        }]
    }, {
        "l1": 12,
        "l2": 8,
        "rows": 5,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "se"
        }, {
            "cell": 2,
            "side": "s",
            "dir": "sw"
        }, {
            "cell": 8,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 9,
            "side": "e",
            "dir": "ne"
        }, {
            "cell": 13,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 16,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 19,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 3,
            "side": "n"
        }, {
            "cell": 3,
            "side": "s"
        }, {
            "cell": 8,
            "side": "s"
        }, {
            "cell": 9,
            "side": "w"
        }, {
            "cell": 10,
            "side": "s"
        }, {
            "cell": 17,
            "side": "e"
        }],
        "cells": [{
            "type": "blackhole",
            "arr": [2, 6, 8, 10, 13, 16, 19]
        }],
        "solution": [{
            "type": "blackhole",
            "arr": [1, 10, 11, 12, 16, 18, 20]
        }]
    }, {
        "l1": 12,
        "l2": 9,
        "rows": 6,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 3,
            "side": "n",
            "dir": "sw"
        }, {
            "cell": 6,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 8,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 9,
            "side": "e",
            "dir": "se"
        }, {
            "cell": 12,
            "side": "n",
            "dir": "sw"
        }, {
            "cell": 17,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 19,
            "side": "s",
            "dir": "ne"
        }, {
            "cell": 20,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 21,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 23,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 3,
            "side": "e"
        }, {
            "cell": 5,
            "side": "e"
        }, {
            "cell": 9,
            "side": "s"
        }, {
            "cell": 11,
            "side": "s"
        }, {
            "cell": 13,
            "side": "w"
        }, {
            "cell": 15,
            "side": "s"
        }, {
            "cell": 16,
            "side": "e"
        }, {
            "cell": 22,
            "side": "s"
        }],
        "cells": [{
            "type": "blackhole",
            "arr": [1, 3, 6, 8, 10, 12, 18, 20, 21]
        }],
        "solution": [{
            "type": "blackhole",
            "arr": [1, 2, 3, 5, 7, 12, 18, 23, 24]
        }]
    }, {
        "l1": 12,
        "l2": 10,
        "rows": 6,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 1,
            "side": "n",
            "dir": "se"
        }, {
            "cell": 2,
            "side": "n",
            "dir": "se"
        }, {
            "cell": 3,
            "side": "n",
            "dir": "se"
        }, {
            "cell": 4,
            "side": "n",
            "dir": "se"
        }, {
            "cell": 4,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 5,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 8,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 9,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 12,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 13,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 16,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 17,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 20,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 21,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 21,
            "side": "s",
            "dir": "ne"
        }, {
            "cell": 22,
            "side": "s",
            "dir": "ne"
        }, {
            "cell": 23,
            "side": "s",
            "dir": "ne"
        }, {
            "cell": 24,
            "side": "s",
            "dir": "ne"
        }, {
            "cell": 24,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 1,
            "side": "e"
        }, {
            "cell": 2,
            "side": "e"
        }, {
            "cell": 3,
            "side": "e"
        }, {
            "cell": 5,
            "side": "e"
        }, {
            "cell": 6,
            "side": "e"
        }, {
            "cell": 7,
            "side": "e"
        }, {
            "cell": 9,
            "side": "e"
        }, {
            "cell": 10,
            "side": "e"
        }, {
            "cell": 11,
            "side": "e"
        }, {
            "cell": 13,
            "side": "e"
        }, {
            "cell": 14,
            "side": "e"
        }, {
            "cell": 15,
            "side": "e"
        }, {
            "cell": 17,
            "side": "e"
        }, {
            "cell": 18,
            "side": "e"
        }, {
            "cell": 19,
            "side": "e"
        }, {
            "cell": 21,
            "side": "e"
        }, {
            "cell": 22,
            "side": "e"
        }, {
            "cell": 23,
            "side": "e"
        }],
        "cells": [{
            "type": "blackhole",
            "arr": [2, 9, 12, 17, 20, 22]
        }],
        "solution": [{
            "type": "blackhole",
            "arr": [4, 8, 12, 16, 20, 24]
        }]
    }],
    [{
        "l1": 13,
        "l2": 1,
        "rows": 6,
        "columns": 5,
        "none": [1, 6, 9, 13, 14, 15, 17, 23],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 6,
            "side": "s"
        }, {
            "cell": 14,
            "side": "s"
        }, {
            "cell": 17,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 16, 20]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 20, 24]
        }]
    }, {
        "l1": 13,
        "l2": 2,
        "rows": 6,
        "columns": 5,
        "none": [6, 9, 13, 16, 19, 27],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 3,
            "side": "e"
        }, {
            "cell": 14,
            "side": "s"
        }, {
            "cell": 14,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 11, 29]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [12, 17, 23]
        }]
    }, {
        "l1": 13,
        "l2": 3,
        "rows": 6,
        "columns": 5,
        "none": [6, 10, 19],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 10,
            "side": "s"
        }, {
            "cell": 23,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [8, 11, 20]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9, 13, 16]
        }]
    }, {
        "l1": 13,
        "l2": 4,
        "rows": 6,
        "columns": 5,
        "none": [1, 2, 7, 13, 15, 16, 22, 26, 29, 30],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 11,
            "side": "e"
        }, {
            "cell": 20,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4, 8, 11, 20]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 11, 19, 23]
        }]
    }, {
        "l1": 13,
        "l2": 5,
        "rows": 6,
        "columns": 5,
        "none": [3, 5, 8, 15, 18, 21, 22, 24, 26, 27, 28, 30],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 21,
            "side": "w"
        }, {
            "cell": 25,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4, 16, 20, 23]
        }, {
            "type": "mirror_stuck",
            "arr": [2]
        }, {
            "type": "blackhole_stuck",
            "arr": [29]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 11, 13, 23]
        }, {
            "type": "mirror_stuck",
            "arr": [2]
        }, {
            "type": "blackhole_stuck",
            "arr": [29]
        }]
    }, {
        "l1": 13,
        "l2": 6,
        "rows": 6,
        "columns": 5,
        "none": [7, 11, 13, 17, 27, 30],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 8,
            "side": "s"
        }, {
            "cell": 14,
            "side": "e"
        }, {
            "cell": 18,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 4, 15, 16]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [8, 16, 19, 22]
        }]
    }, {
        "l1": 13,
        "l2": 7,
        "rows": 6,
        "columns": 5,
        "none": [1, 2, 6, 7, 8, 16, 18, 24],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 2,
            "side": "e"
        }, {
            "cell": 21,
            "side": "e"
        }, {
            "cell": 23,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4, 15, 20, 27, 29]
        }, {
            "type": "mirror_stuck",
            "arr": [11]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [14, 17, 19, 21, 27]
        }, {
            "type": "mirror_stuck",
            "arr": [11]
        }]
    }, {
        "l1": 13,
        "l2": 8,
        "rows": 6,
        "columns": 5,
        "none": [3, 4, 13, 18, 19, 21, 22, 24, 28],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 2,
            "side": "e"
        }, {
            "cell": 15,
            "side": "s"
        }, {
            "cell": 18,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 16, 27]
        }, {
            "type": "glass",
            "arr": [8]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [14, 25, 29]
        }, {
            "type": "glass",
            "arr": [23]
        }]
    }, {
        "l1": 13,
        "l2": 9,
        "rows": 6,
        "columns": 5,
        "none": [16, 17, 19, 22, 25, 26, 27, 28, 30],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 2,
            "side": "n"
        }, {
            "cell": 9,
            "side": "s"
        }, {
            "cell": 22,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 3, 4, 11, 15, 23, 29]
        }, {
            "type": "mirror_stuck",
            "arr": [20]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 11, 14, 15, 21, 24, 29]
        }, {
            "type": "mirror_stuck",
            "arr": [20]
        }]
    }, {
        "l1": 13,
        "l2": 10,
        "rows": 6,
        "columns": 5,
        "none": [1, 3, 10, 15, 18, 28, 29],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 2,
            "side": "n"
        }, {
            "cell": 4,
            "side": "n"
        }, {
            "cell": 9,
            "side": "s"
        }, {
            "cell": 16,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 4, 8, 16, 20, 23]
        }, {
            "type": "mirror_stuck",
            "arr": [11]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [13, 14, 16, 19, 22, 23]
        }, {
            "type": "mirror_stuck",
            "arr": [11]
        }]
    }],
    [{
        "l1": 14,
        "l2": 1,
        "rows": 6,
        "columns": 6,
        "none": [1, 4, 11, 12, 15, 16, 19, 34],
        "lasers": [{
            "cell": 31,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 18,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 25, 28, 36]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 8, 17, 29]
        }]
    }, {
        "l1": 14,
        "l2": 2,
        "rows": 5,
        "columns": 5,
        "none": [8, 13, 14, 17, 18],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 4, 10, 11, 20, 23]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 12, 15, 16, 22, 23]
        }]
    }, {
        "l1": 14,
        "l2": 3,
        "rows": 6,
        "columns": 5,
        "none": [11, 12, 18, 19, 26],
        "lasers": [{
            "cell": 4,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 1,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 5, 14, 21, 28]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 10, 17, 25, 29]
        }]
    }, {
        "l1": 14,
        "l2": 4,
        "rows": 6,
        "columns": 6,
        "none": [5, 7, 8, 14, 15, 17, 23, 36],
        "lasers": [{
            "cell": 15,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 21,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 12, 13, 28, 32]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 11, 18, 19, 33]
        }]
    }, {
        "l1": 14,
        "l2": 5,
        "rows": 7,
        "columns": 5,
        "none": [2, 11, 12, 18, 19, 29, 31],
        "lasers": [{
            "cell": 3,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 3,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 15, 24, 26, 35]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [6, 10, 21, 25, 33]
        }]
    }, {
        "l1": 14,
        "l2": 6,
        "rows": 6,
        "columns": 6,
        "none": [6, 7, 9, 15, 22, 24, 29, 31],
        "lasers": [{
            "cell": 25,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 28,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 8, 12, 17, 19, 33]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 11, 14, 23, 30, 35]
        }]
    }, {
        "l1": 14,
        "l2": 7,
        "rows": 7,
        "columns": 4,
        "none": [5, 6, 14, 18, 20, 22],
        "lasers": [{
            "cell": 3,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 7,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 12, 13, 19, 21, 26, 28]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 9, 13, 15, 17, 24, 27]
        }]
    }, {
        "l1": 14,
        "l2": 8,
        "rows": 6,
        "columns": 6,
        "none": [4, 8, 15, 18, 21, 30, 31],
        "lasers": [{
            "cell": 18,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 24,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 12, 14, 25, 29, 34]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9, 11, 19, 22, 33, 35]
        }]
    }, {
        "l1": 14,
        "l2": 9,
        "rows": 7,
        "columns": 6,
        "none": [1, 6, 17, 18, 20, 22, 23, 27, 34, 35, 39],
        "lasers": [{
            "cell": 37,
            "side": "e",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 38,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 11, 15, 25, 30, 40]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 13, 24, 28, 36, 41]
        }]
    }, {
        "l1": 14,
        "l2": 10,
        "rows": 7,
        "columns": 7,
        "none": [4, 7, 10, 15, 16, 17, 25, 29, 30, 34, 38, 39, 41, 42, 44],
        "lasers": [{
            "cell": 5,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 17,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 6, 19, 21, 36, 40, 48]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [12, 22, 24, 26, 28, 32, 46]
        }]
    }],
    [{
        "l1": 15,
        "l2": 1,
        "rows": 3,
        "columns": 3,
        "none": [1, 9],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 9,
            "side": "e"
        }],
        "cells": [{
            "type": "prism",
            "arr": [7]
        }],
        "solution": [{
            "type": "prism",
            "arr": [5]
        }]
    }, {
        "l1": 15,
        "l2": 2,
        "rows": 4,
        "columns": 4,
        "none": [4, 13],
        "lasers": [{
            "cell": 4,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 13,
            "side": "w"
        }],
        "cells": [{
            "type": "prism",
            "arr": [12, 14]
        }, {
            "type": "blackhole_stuck",
            "arr": [6]
        }],
        "solution": [{
            "type": "prism",
            "arr": [7, 10]
        }, {
            "type": "blackhole_stuck",
            "arr": [6]
        }]
    }, {
        "l1": 15,
        "l2": 3,
        "rows": 4,
        "columns": 4,
        "none": [5, 8, 11],
        "lasers": [{
            "cell": 5,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 8,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [7]
        }, {
            "type": "prism",
            "arr": [1]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [15]
        }, {
            "type": "prism",
            "arr": [10]
        }]
    }, {
        "l1": 15,
        "l2": 4,
        "rows": 4,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 7,
            "side": "e",
            "dir": "se"
        }],
        "targets": [{
            "cell": 2,
            "side": "s"
        }, {
            "cell": 5,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 10]
        }, {
            "type": "prism",
            "arr": [6]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9, 11]
        }, {
            "type": "prism",
            "arr": [5]
        }]
    }, {
        "l1": 15,
        "l2": 5,
        "rows": 4,
        "columns": 4,
        "none": [1],
        "lasers": [{
            "cell": 3,
            "side": "s",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 10,
            "side": "s"
        }, {
            "cell": 16,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [12]
        }, {
            "type": "prism",
            "arr": [5]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9]
        }, {
            "type": "prism",
            "arr": [15]
        }]
    }, {
        "l1": 15,
        "l2": 6,
        "rows": 6,
        "columns": 3,
        "none": [1, 3, 7, 8, 15, 16, 18],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 18,
            "side": "e"
        }],
        "cells": [{
            "type": "prism",
            "arr": [6, 13]
        }],
        "solution": [{
            "type": "prism",
            "arr": [4, 11]
        }]
    }, {
        "l1": 15,
        "l2": 7,
        "rows": 5,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 14,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [8, 13, 20]
        }, {
            "type": "prism",
            "arr": [18]
        }, {
            "type": "mirror_stuck",
            "arr": [6]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [8, 13, 18]
        }, {
            "type": "prism",
            "arr": [2]
        }, {
            "type": "mirror_stuck",
            "arr": [6]
        }]
    }, {
        "l1": 15,
        "l2": 8,
        "rows": 4,
        "columns": 3,
        "none": [9],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 10,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 12]
        }, {
            "type": "prism",
            "arr": [5]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 6]
        }, {
            "type": "prism",
            "arr": [8]
        }]
    }, {
        "l1": 15,
        "l2": 9,
        "rows": 4,
        "columns": 4,
        "none": [16],
        "lasers": [{
            "cell": 10,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 6,
            "side": "s"
        }, {
            "cell": 16,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [8]
        }, {
            "type": "prism",
            "arr": [13]
        }, {
            "type": "mirror_stuck",
            "arr": [3]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9]
        }, {
            "type": "prism",
            "arr": [12]
        }, {
            "type": "mirror_stuck",
            "arr": [3]
        }]
    }, {
        "l1": 15,
        "l2": 10,
        "rows": 4,
        "columns": 4,
        "none": [3, 5, 8],
        "lasers": [{
            "cell": 5,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 3,
            "side": "n"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [7, 13]
        }, {
            "type": "prism",
            "arr": [11]
        }, {
            "type": "blackhole_stuck",
            "arr": [6]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4, 14]
        }, {
            "type": "prism",
            "arr": [7]
        }, {
            "type": "blackhole_stuck",
            "arr": [6]
        }]
    }],
    [{
        "l1": 16,
        "l2": 1,
        "rows": 5,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 9,
            "side": "e"
        }, {
            "cell": 11,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [5, 13]
        }, {
            "type": "prism",
            "arr": [14]
        }, {
            "type": "mirror_stuck",
            "arr": [6, 7]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [10, 14]
        }, {
            "type": "prism",
            "arr": [8]
        }, {
            "type": "mirror_stuck",
            "arr": [6, 7]
        }]
    }, {
        "l1": 16,
        "l2": 2,
        "rows": 4,
        "columns": 4,
        "none": [1, 10, 13, 14],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 4,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [7, 12]
        }, {
            "type": "prism",
            "arr": [9, 15]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [5, 15]
        }, {
            "type": "prism",
            "arr": [2, 8]
        }]
    }, {
        "l1": 16,
        "l2": 3,
        "rows": 4,
        "columns": 4,
        "none": [1, 11],
        "lasers": [{
            "cell": 2,
            "side": "e",
            "dir": "se"
        }, {
            "cell": 9,
            "side": "e",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 4,
            "side": "s"
        }, {
            "cell": 16,
            "side": "s"
        }],
        "cells": [{
            "type": "prism",
            "arr": [5, 14]
        }],
        "solution": [{
            "type": "prism",
            "arr": [7, 16]
        }]
    }, {
        "l1": 16,
        "l2": 4,
        "rows": 3,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 9,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 3,
            "side": "s"
        }, {
            "cell": 11,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 5, 12]
        }, {
            "type": "prism",
            "arr": [8]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 6, 8]
        }, {
            "type": "prism",
            "arr": [10]
        }]
    }, {
        "l1": 16,
        "l2": 5,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 4,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 4,
            "side": "s",
            "dir": "se"
        }],
        "targets": [{
            "cell": 6,
            "side": "n"
        }, {
            "cell": 6,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 5]
        }, {
            "type": "prism",
            "arr": [9]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 7]
        }, {
            "type": "prism",
            "arr": [5]
        }]
    }, {
        "l1": 16,
        "l2": 6,
        "rows": 4,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 3,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 1,
            "side": "n"
        }, {
            "cell": 6,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4]
        }, {
            "type": "prism",
            "arr": [9, 11]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9]
        }, {
            "type": "prism",
            "arr": [2, 6]
        }]
    }, {
        "l1": 16,
        "l2": 7,
        "rows": 4,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 3,
            "side": "e"
        }, {
            "cell": 8,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4, 7, 12]
        }, {
            "type": "prism",
            "arr": [11]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [7, 9, 11]
        }, {
            "type": "prism",
            "arr": [1]
        }]
    }, {
        "l1": 16,
        "l2": 8,
        "rows": 3,
        "columns": 3,
        "none": [8],
        "lasers": [{
            "cell": 6,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 1,
            "side": "n"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2]
        }, {
            "type": "prism",
            "arr": [4, 5, 6, 7]
        }, {
            "type": "mirror_stuck",
            "arr": [3]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9]
        }, {
            "type": "prism",
            "arr": [1, 2, 5, 7]
        }, {
            "type": "mirror_stuck",
            "arr": [3]
        }]
    }, {
        "l1": 16,
        "l2": 9,
        "rows": 4,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 16,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 2,
            "side": "s"
        }, {
            "cell": 3,
            "side": "e"
        }, {
            "cell": 9,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [14]
        }, {
            "type": "prism",
            "arr": [7, 12, 13]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9]
        }, {
            "type": "prism",
            "arr": [3, 6, 15]
        }]
    }, {
        "l1": 16,
        "l2": 10,
        "rows": 4,
        "columns": 4,
        "none": [6],
        "lasers": [{
            "cell": 3,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }, {
            "cell": 11,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 9]
        }, {
            "type": "prism",
            "arr": [12, 14]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [8, 15]
        }, {
            "type": "prism",
            "arr": [3, 11]
        }]
    }],
    [{
        "l1": 17,
        "l2": 1,
        "rows": 5,
        "columns": 4,
        "none": [3, 7, 20],
        "lasers": [{
            "cell": 5,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 7,
            "side": "s"
        }, {
            "cell": 13,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4, 16, 17]
        }, {
            "type": "prism",
            "arr": [6]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 12, 18]
        }, {
            "type": "prism",
            "arr": [9]
        }]
    }, {
        "l1": 17,
        "l2": 2,
        "rows": 5,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "s",
            "dir": "se"
        }, {
            "cell": 14,
            "side": "s",
            "dir": "se"
        }],
        "targets": [{
            "cell": 2,
            "side": "e"
        }, {
            "cell": 9,
            "side": "w"
        }, {
            "cell": 9,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4, 7, 17]
        }, {
            "type": "prism",
            "arr": [12]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [5, 15, 18]
        }, {
            "type": "prism",
            "arr": [2]
        }]
    }, {
        "l1": 17,
        "l2": 3,
        "rows": 4,
        "columns": 4,
        "none": [4, 13],
        "lasers": [{
            "cell": 10,
            "side": "s",
            "dir": "se"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 9, 11]
        }, {
            "type": "prism",
            "arr": [8]
        }, {
            "type": "mirror_stuck",
            "arr": [5]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 12, 14]
        }, {
            "type": "prism",
            "arr": [11]
        }, {
            "type": "mirror_stuck",
            "arr": [5]
        }]
    }, {
        "l1": 17,
        "l2": 4,
        "rows": 4,
        "columns": 4,
        "none": [12],
        "lasers": [{
            "cell": 1,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 5,
            "side": "e"
        }, {
            "cell": 7,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 9, 15]
        }, {
            "type": "prism",
            "arr": [8]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 8, 10]
        }, {
            "type": "prism",
            "arr": [1]
        }]
    }, {
        "l1": 17,
        "l2": 5,
        "rows": 4,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 6,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 5,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 8, 13, 15]
        }, {
            "type": "prism",
            "arr": [7]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 5, 12, 15]
        }, {
            "type": "prism",
            "arr": [10]
        }]
    }, {
        "l1": 17,
        "l2": 6,
        "rows": 4,
        "columns": 4,
        "none": [3, 11],
        "lasers": [{
            "cell": 8,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 12,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 2,
            "side": "e"
        }, {
            "cell": 3,
            "side": "e"
        }, {
            "cell": 5,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [15]
        }, {
            "type": "prism",
            "arr": [10, 13]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [5]
        }, {
            "type": "prism",
            "arr": [6, 8]
        }]
    }, {
        "l1": 17,
        "l2": 7,
        "rows": 4,
        "columns": 4,
        "none": [7],
        "lasers": [{
            "cell": 6,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 2,
            "side": "s"
        }, {
            "cell": 7,
            "side": "s"
        }, {
            "cell": 9,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4, 5, 10, 12, 13, 16]
        }, {
            "type": "prism",
            "arr": [3]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 3, 5, 8, 13, 14]
        }, {
            "type": "prism",
            "arr": [10]
        }]
    }, {
        "l1": 17,
        "l2": 8,
        "rows": 5,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 7,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 9,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 2,
            "side": "s"
        }, {
            "cell": 6,
            "side": "s"
        }, {
            "cell": 10,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [13, 15]
        }, {
            "type": "prism",
            "arr": [3, 12]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [6, 7]
        }, {
            "type": "prism",
            "arr": [9, 11]
        }]
    }, {
        "l1": 17,
        "l2": 9,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 9,
            "side": "e",
            "dir": "nw"
        }, {
            "cell": 9,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 4,
            "side": "s"
        }, {
            "cell": 5,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [9]
        }, {
            "type": "prism",
            "arr": [1, 3, 5, 7]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2]
        }, {
            "type": "prism",
            "arr": [1, 3, 7, 9]
        }]
    }, {
        "l1": 17,
        "l2": 10,
        "rows": 4,
        "columns": 4,
        "none": [1, 12],
        "lasers": [{
            "cell": 2,
            "side": "e",
            "dir": "se"
        }, {
            "cell": 4,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 1,
            "side": "n"
        }, {
            "cell": 5,
            "side": "s"
        }, {
            "cell": 6,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [11, 16]
        }, {
            "type": "prism",
            "arr": [14]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3, 11]
        }, {
            "type": "prism",
            "arr": [4]
        }]
    }],
    [{
        "l1": 18,
        "l2": 1,
        "rows": 4,
        "columns": 2,
        "none": [],
        "lasers": [{
            "cell": 5,
            "side": "w",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 2,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 4, 5, 6]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 6, 7, 8]
        }]
    }, {
        "l1": 18,
        "l2": 2,
        "rows": 4,
        "columns": 2,
        "none": [],
        "lasers": [{
            "cell": 2,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 8,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 4,
            "side": "e"
        }, {
            "cell": 6,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2, 3, 4, 8]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 3, 5, 7]
        }]
    }, {
        "l1": 18,
        "l2": 3,
        "rows": 4,
        "columns": 2,
        "none": [],
        "lasers": [{
            "cell": 5,
            "side": "w",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 1,
            "side": "w"
        }, {
            "cell": 8,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [7]
        }, {
            "type": "glass",
            "arr": [6]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4]
        }, {
            "type": "glass",
            "arr": [3]
        }]
    }, {
        "l1": 18,
        "l2": 4,
        "rows": 4,
        "columns": 2,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 8,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 3,
            "side": "w"
        }, {
            "cell": 6,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1, 2, 7, 8]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 4, 5, 7]
        }]
    }, {
        "l1": 18,
        "l2": 5,
        "rows": 4,
        "columns": 2,
        "none": [],
        "lasers": [{
            "cell": 4,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 7,
            "side": "w",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 3,
            "side": "e"
        }, {
            "cell": 3,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2]
        }, {
            "type": "blackhole",
            "arr": [6, 7, 8]
        }, {
            "type": "blackhole_stuck",
            "arr": [1]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [6]
        }, {
            "type": "blackhole",
            "arr": [2, 3, 8]
        }, {
            "type": "blackhole_stuck",
            "arr": [1]
        }]
    }, {
        "l1": 18,
        "l2": 6,
        "rows": 4,
        "columns": 2,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 1,
            "side": "s",
            "dir": "ne"
        }, {
            "cell": 8,
            "side": "n",
            "dir": "sw"
        }, {
            "cell": 8,
            "side": "w",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 2,
            "side": "e"
        }, {
            "cell": 3,
            "side": "w"
        }, {
            "cell": 6,
            "side": "e"
        }, {
            "cell": 7,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 4, 5, 6]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [1, 4, 5, 8]
        }]
    }, {
        "l1": 18,
        "l2": 7,
        "rows": 4,
        "columns": 2,
        "none": [],
        "lasers": [{
            "cell": 1,
            "side": "w",
            "dir": "se"
        }, {
            "cell": 5,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 6,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 7,
            "side": "s",
            "dir": "ne"
        }, {
            "cell": 8,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 3,
            "side": "w"
        }, {
            "cell": 4,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [3, 7]
        }, {
            "type": "blackhole",
            "arr": [2, 6]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2, 8]
        }, {
            "type": "blackhole",
            "arr": [1, 7]
        }]
    }, {
        "l1": 18,
        "l2": 8,
        "rows": 4,
        "columns": 2,
        "none": [],
        "lasers": [{
            "cell": 3,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 1,
            "side": "w"
        }, {
            "cell": 2,
            "side": "e"
        }, {
            "cell": 7,
            "side": "w"
        }, {
            "cell": 8,
            "side": "e"
        }],
        "cells": [{
            "type": "glass",
            "arr": [1, 2, 7]
        }],
        "solution": [{
            "type": "glass",
            "arr": [4, 5, 6]
        }]
    }, {
        "l1": 18,
        "l2": 9,
        "rows": 4,
        "columns": 2,
        "none": [],
        "lasers": [{
            "cell": 3,
            "side": "w",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }, {
            "cell": 7,
            "side": "w"
        }],
        "cells": [{
            "type": "glass",
            "arr": [5, 8]
        }, {
            "type": "prism",
            "arr": [4]
        }],
        "solution": [{
            "type": "glass",
            "arr": [1, 4]
        }, {
            "type": "prism",
            "arr": [5]
        }]
    }, {
        "l1": 18,
        "l2": 10,
        "rows": 4,
        "columns": 2,
        "none": [8],
        "lasers": [{
            "cell": 3,
            "side": "w",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 2,
            "side": "n"
        }, {
            "cell": 7,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [6]
        }, {
            "type": "blackhole",
            "arr": [1]
        }, {
            "type": "glass",
            "arr": [5]
        }, {
            "type": "prism",
            "arr": [4]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4]
        }, {
            "type": "blackhole",
            "arr": [6]
        }, {
            "type": "glass",
            "arr": [1]
        }, {
            "type": "prism",
            "arr": [5]
        }]
    }],
    [{
        "l1": 19,
        "l2": 1,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 6,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 2,
            "side": "n"
        }, {
            "cell": 8,
            "side": "s"
        }],
        "cells": [{
            "type": "glass",
            "arr": [1]
        }, {
            "type": "prism",
            "arr": [3]
        }],
        "solution": [{
            "type": "glass",
            "arr": [9]
        }, {
            "type": "prism",
            "arr": [2]
        }]
    }, {
        "l1": 19,
        "l2": 2,
        "rows": 3,
        "columns": 3,
        "none": [3],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 4,
            "side": "w"
        }],
        "cells": [{
            "type": "glass",
            "arr": [5, 7, 9]
        }, {
            "type": "prism",
            "arr": [1]
        }],
        "solution": [{
            "type": "glass",
            "arr": [1, 6, 8]
        }, {
            "type": "prism",
            "arr": [2]
        }]
    }, {
        "l1": 19,
        "l2": 3,
        "rows": 3,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 4,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 1,
            "side": "n"
        }, {
            "cell": 5,
            "side": "e"
        }, {
            "cell": 8,
            "side": "s"
        }],
        "cells": [{
            "type": "glass",
            "arr": [3, 10, 11]
        }, {
            "type": "prism",
            "arr": [2]
        }],
        "solution": [{
            "type": "glass",
            "arr": [2, 7, 11]
        }, {
            "type": "prism",
            "arr": [4]
        }]
    }, {
        "l1": 19,
        "l2": 4,
        "rows": 4,
        "columns": 4,
        "none": [5, 7],
        "lasers": [{
            "cell": 10,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 13,
            "side": "e"
        }],
        "cells": [{
            "type": "glass",
            "arr": [6, 9, 12, 15]
        }, {
            "type": "prism",
            "arr": [1]
        }],
        "solution": [{
            "type": "glass",
            "arr": [3, 6, 8, 12]
        }, {
            "type": "prism",
            "arr": [14]
        }]
    }, {
        "l1": 19,
        "l2": 5,
        "rows": 4,
        "columns": 4,
        "none": [4],
        "lasers": [{
            "cell": 10,
            "side": "s",
            "dir": "se"
        }],
        "targets": [{
            "cell": 5,
            "side": "s"
        }, {
            "cell": 12,
            "side": "e"
        }],
        "cells": [{
            "type": "glass",
            "arr": [3, 6, 13, 16]
        }, {
            "type": "prism",
            "arr": [1]
        }],
        "solution": [{
            "type": "glass",
            "arr": [2, 3, 7, 14]
        }, {
            "type": "prism",
            "arr": [10]
        }]
    }, {
        "l1": 19,
        "l2": 6,
        "rows": 4,
        "columns": 4,
        "none": [14],
        "lasers": [{
            "cell": 3,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 1,
            "side": "n"
        }, {
            "cell": 3,
            "side": "s"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "glass",
            "arr": [8, 13]
        }, {
            "type": "prism",
            "arr": [10, 11]
        }],
        "solution": [{
            "type": "glass",
            "arr": [2, 6]
        }, {
            "type": "prism",
            "arr": [7, 11]
        }]
    }, {
        "l1": 19,
        "l2": 7,
        "rows": 4,
        "columns": 4,
        "none": [15],
        "lasers": [{
            "cell": 15,
            "side": "e",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 4,
            "side": "n"
        }, {
            "cell": 8,
            "side": "s"
        }, {
            "cell": 10,
            "side": "e"
        }],
        "cells": [{
            "type": "glass",
            "arr": [2, 7, 9]
        }, {
            "type": "prism",
            "arr": [14]
        }],
        "solution": [{
            "type": "glass",
            "arr": [2, 5, 10]
        }, {
            "type": "prism",
            "arr": [7]
        }]
    }, {
        "l1": 19,
        "l2": 8,
        "rows": 5,
        "columns": 4,
        "none": [],
        "lasers": [{
            "cell": 7,
            "side": "e",
            "dir": "se"
        }],
        "targets": [{
            "cell": 13,
            "side": "e"
        }, {
            "cell": 14,
            "side": "e"
        }, {
            "cell": 15,
            "side": "e"
        }],
        "cells": [{
            "type": "glass",
            "arr": [2, 5, 11]
        }, {
            "type": "prism",
            "arr": [17]
        }],
        "solution": [{
            "type": "glass",
            "arr": [8, 13, 18]
        }, {
            "type": "prism",
            "arr": [15]
        }]
    }, {
        "l1": 19,
        "l2": 9,
        "rows": 6,
        "columns": 4,
        "none": [4, 9, 12, 14, 20],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "se"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }, {
            "cell": 14,
            "side": "s"
        }, {
            "cell": 20,
            "side": "e"
        }],
        "cells": [{
            "type": "glass",
            "arr": [1, 8, 23]
        }, {
            "type": "prism",
            "arr": [10, 17]
        }],
        "solution": [{
            "type": "glass",
            "arr": [16, 17, 22]
        }, {
            "type": "prism",
            "arr": [2, 11]
        }]
    }, {
        "l1": 19,
        "l2": 10,
        "rows": 6,
        "columns": 4,
        "none": [1, 12, 13],
        "lasers": [{
            "cell": 18,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 1,
            "side": "w"
        }, {
            "cell": 8,
            "side": "e"
        }, {
            "cell": 9,
            "side": "w"
        }],
        "cells": [{
            "type": "glass",
            "arr": [3, 11, 14, 16, 19, 21]
        }, {
            "type": "prism",
            "arr": [6]
        }],
        "solution": [{
            "type": "glass",
            "arr": [4, 10, 11, 17, 20, 23]
        }, {
            "type": "prism",
            "arr": [14]
        }]
    }],
    [{
        "l1": 20,
        "l2": 1,
        "rows": 3,
        "columns": 3,
        "none": [8, 9],
        "lasers": [{
            "cell": 3,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 4,
            "side": "w"
        }, {
            "cell": 9,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [5]
        }, {
            "type": "blackhole",
            "arr": [2]
        }, {
            "type": "glass",
            "arr": [7]
        }, {
            "type": "prism",
            "arr": [1]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [7]
        }, {
            "type": "blackhole",
            "arr": [1]
        }, {
            "type": "glass",
            "arr": [2]
        }, {
            "type": "prism",
            "arr": [6]
        }]
    }, {
        "l1": 20,
        "l2": 2,
        "rows": 3,
        "columns": 3,
        "none": [7],
        "lasers": [{
            "cell": 3,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 1,
            "side": "n"
        }, {
            "cell": 9,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [2]
        }, {
            "type": "blackhole",
            "arr": [6]
        }, {
            "type": "glass",
            "arr": [8]
        }, {
            "type": "prism",
            "arr": [4]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4]
        }, {
            "type": "blackhole",
            "arr": [6]
        }, {
            "type": "glass",
            "arr": [5]
        }, {
            "type": "prism",
            "arr": [3]
        }]
    }, {
        "l1": 20,
        "l2": 3,
        "rows": 3,
        "columns": 3,
        "none": [1],
        "lasers": [{
            "cell": 2,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 3,
            "side": "n"
        }, {
            "cell": 7,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [6]
        }, {
            "type": "blackhole",
            "arr": [5]
        }, {
            "type": "glass",
            "arr": [8]
        }, {
            "type": "prism",
            "arr": [4]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [8]
        }, {
            "type": "blackhole",
            "arr": [9]
        }, {
            "type": "glass",
            "arr": [4]
        }, {
            "type": "prism",
            "arr": [3]
        }]
    }, {
        "l1": 20,
        "l2": 4,
        "rows": 3,
        "columns": 3,
        "none": [3],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 6,
            "side": "e"
        }, {
            "cell": 7,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [4]
        }, {
            "type": "blackhole",
            "arr": [1]
        }, {
            "type": "glass",
            "arr": [9]
        }, {
            "type": "prism",
            "arr": [5]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [9]
        }, {
            "type": "blackhole",
            "arr": [8]
        }, {
            "type": "glass",
            "arr": [1]
        }, {
            "type": "prism",
            "arr": [4]
        }]
    }, {
        "l1": 20,
        "l2": 5,
        "rows": 3,
        "columns": 3,
        "none": [1, 8, 9],
        "lasers": [{
            "cell": 1,
            "side": "n",
            "dir": "se"
        }, {
            "cell": 3,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 4,
            "side": "w"
        }, {
            "cell": 7,
            "side": "w"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [7]
        }, {
            "type": "blackhole",
            "arr": [6]
        }, {
            "type": "glass",
            "arr": [5]
        }, {
            "type": "prism",
            "arr": [2]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [6]
        }, {
            "type": "blackhole",
            "arr": [3]
        }, {
            "type": "glass",
            "arr": [2]
        }, {
            "type": "prism",
            "arr": [7]
        }]
    }, {
        "l1": 20,
        "l2": 6,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 7,
            "side": "w",
            "dir": "ne"
        }, {
            "cell": 9,
            "side": "s",
            "dir": "nw"
        }],
        "targets": [{
            "cell": 1,
            "side": "w"
        }, {
            "cell": 4,
            "side": "w"
        }, {
            "cell": 9,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [6]
        }, {
            "type": "blackhole",
            "arr": [5]
        }, {
            "type": "glass",
            "arr": [3]
        }, {
            "type": "prism",
            "arr": [2]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2]
        }, {
            "type": "blackhole",
            "arr": [3]
        }, {
            "type": "glass",
            "arr": [5]
        }, {
            "type": "prism",
            "arr": [8]
        }]
    }, {
        "l1": 20,
        "l2": 7,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "sw"
        }, {
            "cell": 4,
            "side": "s",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 3,
            "side": "e"
        }, {
            "cell": 7,
            "side": "s"
        }, {
            "cell": 9,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [5]
        }, {
            "type": "blackhole",
            "arr": [1]
        }, {
            "type": "glass",
            "arr": [6]
        }, {
            "type": "prism",
            "arr": [8]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [4]
        }, {
            "type": "blackhole",
            "arr": [1]
        }, {
            "type": "glass",
            "arr": [8]
        }, {
            "type": "prism",
            "arr": [2]
        }]
    }, {
        "l1": 20,
        "l2": 8,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 3,
            "side": "e",
            "dir": "sw"
        }, {
            "cell": 4,
            "side": "w",
            "dir": "ne"
        }],
        "targets": [{
            "cell": 2,
            "side": "n"
        }, {
            "cell": 6,
            "side": "e"
        }, {
            "cell": 9,
            "side": "s"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [1]
        }, {
            "type": "blackhole",
            "arr": [5]
        }, {
            "type": "glass",
            "arr": [8]
        }, {
            "type": "prism",
            "arr": [7]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [8]
        }, {
            "type": "blackhole",
            "arr": [7]
        }, {
            "type": "glass",
            "arr": [1]
        }, {
            "type": "prism",
            "arr": [6]
        }]
    }, {
        "l1": 20,
        "l2": 9,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 3,
            "side": "s",
            "dir": "nw"
        }, {
            "cell": 4,
            "side": "w",
            "dir": "se"
        }],
        "targets": [{
            "cell": 3,
            "side": "n"
        }, {
            "cell": 9,
            "side": "w"
        }, {
            "cell": 9,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [7]
        }, {
            "type": "blackhole",
            "arr": [2]
        }, {
            "type": "glass",
            "arr": [9]
        }, {
            "type": "prism",
            "arr": [1]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [2]
        }, {
            "type": "blackhole",
            "arr": [1]
        }, {
            "type": "glass",
            "arr": [7]
        }, {
            "type": "prism",
            "arr": [8]
        }]
    }, {
        "l1": 20,
        "l2": 10,
        "rows": 3,
        "columns": 3,
        "none": [],
        "lasers": [{
            "cell": 2,
            "side": "n",
            "dir": "se"
        }, {
            "cell": 6,
            "side": "e",
            "dir": "sw"
        }],
        "targets": [{
            "cell": 1,
            "side": "s"
        }, {
            "cell": 7,
            "side": "s"
        }, {
            "cell": 8,
            "side": "e"
        }],
        "cells": [{
            "type": "mirror",
            "arr": [8]
        }, {
            "type": "blackhole",
            "arr": [9]
        }, {
            "type": "glass",
            "arr": [3]
        }, {
            "type": "prism",
            "arr": [2]
        }],
        "solution": [{
            "type": "mirror",
            "arr": [3]
        }, {
            "type": "blackhole",
            "arr": [1]
        }, {
            "type": "glass",
            "arr": [9]
        }, {
            "type": "prism",
            "arr": [5]
        }]
    }]
];

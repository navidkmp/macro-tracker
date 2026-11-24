
# Micro Tracker

A simple nutrition tracking dashboard built with Django. Track your daily food intake, monitor calories, and view macronutrient breakdowns through a clean and modern interface.

## Features

- Add and manage food items
- Track daily calorie intake
- Monitor macronutrients:
  - Protein
  - Carbohydrates
  - Fat
- View consumed food items in a dashboard
- Visualize macronutrient distribution using charts
- Delete food entries
- Dark-themed, responsive user interface

## Built With

- **Python**
- **Django**
- **HTML**
- **CSS**
- **JavaScript**
- **Tailwind CSS**
- **Chart.js**

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/navidkmp/macro-tracker.git
cd macro-tracker
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate it:

**Windows:**
```bash
venv\Scripts\activate
```

**macOS / Linux:**
```bash
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install django
```

### 4. Apply database migrations

```bash
python manage.py migrate
```

### 5. Run the development server

```bash
python manage.py runserver
```

Open your browser and visit:

```text
http://127.0.0.1:8000/
```

## Static Files

Static files are stored in the top-level `static/` directory.

The project uses the following configuration in `settings.py`:

```python
STATIC_URL = 'static/'

STATICFILES_DIRS = [
    BASE_DIR / 'static',
]
```

## Pay Attention!!!!!!

you have to create a superuser after migrate!

## Purpose

Micro Tracker is a learning project focused on building a practical web application with Django, organizing frontend assets, and working with dynamic dashboard components.

---

**Made with Python and Django.**

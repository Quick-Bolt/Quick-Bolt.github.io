<template>
	<div>
		<section class="about" id="about">
			<div class="container">
				<div class="profile-img">
					<img src="../resources/profile-pic.jpg">
				</div>

				<div class="about-details">
					<div class="about-heading">
						<h1>About</h1>
						<h6>Me</h6>
					</div>
					<p>
						I'm a Game developer characterized by <strong>designing</strong> and <strong>problem solving skills</strong>, with experience in <strong>team work</strong> and <strong>simulation environments</strong>.
                    </p>
                    <br>
					<div class="separator-line"></div>
                    <br>
					<p>
						I've always been fascinated by games since I was a kid. Constantly trying to understand how they worked behind the scenes and how they managed to evoke such strong emotions in me. This led me to become experienced with <strong>Unity</strong>, <strong>Unreal Engine</strong>, and <strong>Godot</strong>.<br><br>
Nowadays, when I play a game, I can't help myself but to deconstruct it's design and analyze it's weak and strong points in order to elevate my own skills.
                    </p>
                </div>
			</div>
		</section>
		<div class="separator-line"></div>
            <div class="container">
                <div class="my-skills">
                    <div class="skill">
                        <h1></h1>
                    </div>
                </div>
                <div class="my-skills">

                    <div class="skill fav-games">
                        <h1>Favourite Games</h1>
						<ul>
							<li><h2>Some of my favourite games include:</h2></li>
							<br>
							<li><p> • Dark Souls</p></li>
							<li><p> • Monster Hunter</p></li>
							<li><p> • Final Fantasy</p></li>
							<li><p> • Pokémon</p></li>
							<li><p> • Katamari</p></li>
							<li><p> • The Legend of Zelda</p></li>
							<li><p> • Xenoblade</p></li>
							<li><p> • Dragon Quest</p></li>
							<li><p> • Hollow Knight</p></li>
							<li><p> • Ace Attorney</p></li>
							<li><p> • Shovel Knight</p></li>
							<li><p> • Risk of Rain</p></li>
							<li><p> • Vampire Survivors</p></li>
							<li><p> • Animal Crossing</p></li>
							<li><p> • GTA</p></li>
						</ul>
                    </div>

                    <div class="skill fav-games">
                        <h1>Hobbies</h1>
                        <ul>
							<h2>Outside of my time spent on development, I occasionally occupy myself with:</h2>
							<br>
							<li><p> • Hiking and camping</p></li>
							<li><p> • Reading novels</p></li>
							<li><p> • Drawing</p></li>
							<li><p> • Watching shows</p></li>
							<li><p> • Cooking</p></li>
							<li><p> • Working out</p></li>
							<!--li>
								<ul>
									<li><p class="global-link"> • <a href="https://www.youtube.com/channel/UCuHVjteDW9tCb8QqMrtGvwQ" target="_blank"><strong>Thomas Brush</strong></a></p></li>
									<li><p class="global-link"> • <a href="https://www.youtube.com/c/LostRelicGames" target="_blank"><strong>Lost Relic Games</strong></a></p></li>
									<li><p class="global-link"> • <a href="https://www.youtube.com/c/Unity3dCollege" target="_blank"><strong>Jason Weimann</strong></a></p></li>
								</ul>
							</li-->
						</ul>
                    </div>

                </div>
            </div>
			<br><br><br><br><br>
		<Footer :showArrow="true"></Footer>
	</div>
</template>

<style scoped>
	.fav-games {
		text-align:left;
	}
	.fav-games li {
		list-style-type: none;
	}
	.fav-games h2 {
		color: #638dccdd;
	}
</style>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>
